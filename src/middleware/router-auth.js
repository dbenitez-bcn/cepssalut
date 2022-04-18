export default function ({ $fire, redirect, route }) {
  $fire.auth.currentUser == null && isAdminRoute(route) ? redirect('/login') : ''
}

function isAdminRoute(route) {
  if (route.path.includes('admin')) {
    return true
  }
}
