#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <unistd.h>

#define NUM_PROCESSES 5

int process_ids[NUM_PROCESSES] = {1, 2, 3, 4, 5}; 
int is_active[NUM_PROCESSES] = {1, 1, 1, 1, 1};  
int leader = -1;  

pthread_mutex_t lock;

void* process(void* arg) {
    int id = *((int*)arg);  // Correct typecasting

    while (1) {
        sleep(1);  

        pthread_mutex_lock(&lock);

        // If leader exists, announce it
        if (leader != -1) {
            if (id == leader) {
                printf("Process %d is the current leader.\n", id);
            }
        } else {
            // Start an election if no leader or leader crashed
            printf("Process %d starts election.\n", id);
            
            int max_id = id;
            for (int i = 0; i < NUM_PROCESSES; i++) {
                if (is_active[i] && process_ids[i] > max_id) {
                    max_id = process_ids[i];
                }
            }

            // Declare new leader
            if (max_id == id) {
                leader = id;
                printf("Process %d becomes the leader.\n", id);
            }
        }

        pthread_mutex_unlock(&lock);  
        sleep(2); 
    }

    return NULL;
}

void simulate_crash(int crash_id) {
    pthread_mutex_lock(&lock);
    is_active[crash_id] = 0; 
    printf("Process %d has crashed.\n", process_ids[crash_id]);
    if (leader == process_ids[crash_id]) {
        leader = -1;  // Reset leader if the crashed process was the leader
    }
    pthread_mutex_unlock(&lock);
}

int main() {
    pthread_t threads[NUM_PROCESSES];

    pthread_mutex_init(&lock, NULL);

    // Create threads for each process
    for (int i = 0; i < NUM_PROCESSES; i++) {
        pthread_create(&threads[i], NULL, process, &process_ids[i]);
    }

    // User input to simulate crashes
    int crash_id;
    while (1) {
        printf("Enter the process ID to crash (1-5), or 0 to exit: ");
        scanf("%d", &crash_id);

        if (crash_id == 0) {
            break;
        } else if (crash_id >= 1 && crash_id <= 5) {
            simulate_crash(crash_id - 1);  // Adjusting index (ID 1 maps to index 0)
        } else {
            printf("Invalid input. Please enter a valid process ID.\n");
        }
    }

    // Cleanup (won't reach here unless exited manually)
    for (int i = 0; i < NUM_PROCESSES; i++) {
        pthread_cancel(threads[i]);
        pthread_join(threads[i], NULL);
    }

    pthread_mutex_destroy(&lock);

    return 0;
}
