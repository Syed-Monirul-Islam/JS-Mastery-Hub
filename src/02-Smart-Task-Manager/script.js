function createIdGenerator(n) {
    let id = n;
    return function() {
        return id++;
    }
}

function validateTask(taskName) {
    return {
        isNotEmpty: () => {
            if (taskName.trim().length > 0) return true;
            else throw new Error("Task name cannot be empty!");
        },
        isLengthValid: (limit) => {
            if (taskName.length <= limit) return true;
            else throw new Error(`Task cannot be more than ${limit} characters!`);
        }
    };
}

function createTracker() {
    let count = 0;
    const initialValue = 0;
    return {
        add: () => {
            count++;
            return count;
        },
        remove: () => {
            if (count > 0) count--;
            return count;
        },
        reset: () => {
            count = initialValue;
            return count;
        },
        getCount: () => count
    };
}

// Initializing the closures
const getNextId = createIdGenerator(101);
const taskTracker = createTracker();

/**
 * Main function to handle task logic
 * This combines ID generation, validation, and tracking
 */
function handleAddTask(taskName) {
    try {
        const validator = validateTask(taskName);
        validator.isNotEmpty();
        validator.isLengthValid(25);

        const id = getNextId();
        const activeTasks = taskTracker.add();

        // Returning an object with all the data
        return {
            success: true,
            id: id,
            task: taskName,
            totalActive: activeTasks
        };

    } catch (error) {
        return {
            success: false,
            message: error.message
        };
    }
}