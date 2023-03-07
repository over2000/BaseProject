export function errorHandling(message, enqueueSnackbar) {
  enqueueSnackbar(message, {
    variant: 'error',
    autoHideDuration: 3000,
    persist: false
  })
}