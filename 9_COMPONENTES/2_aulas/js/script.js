var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))

var popover = popoverTriggerList.map((popoverTriggerEl) => {
    return new bootstrap.Popover(popoverTriggerEl)
})

/* Tooltip */

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))

var tooltip = tooltipTriggerList.map((tooltipTriggerEl) => {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})