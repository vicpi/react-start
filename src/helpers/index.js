function trim(value) {
    return value.trim();
}

function capitalize(value) {
    return value[0].toUpperCase() + value.substr(1);
}

export const generateTodo = (title) => {
    title = title |> trim |> capitalize;
    const todo = {
        id: Date.now(),
        title: title,
        completed: false
    }
    return todo
}
