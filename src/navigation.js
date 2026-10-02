const navigationStack = [];


export function navigate(page) {

    navigationStack.push(page);

    page();
}


export function goBack() {

    navigationStack.pop();

    const previous =
        navigationStack[
            navigationStack.length - 1
        ];

    if (previous) {

        previous();

    } else {

        location.reload();

    }
}


export function clearNavigation() {

    navigationStack.length = 0;

}