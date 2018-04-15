const bannedBodyClasses = ["signup_wall_prevent_scroll", "logged_out"]

function run(){
  const {body} = document
  const signupWalls = Array.from(body.childNodes).filter(node => (node.id || "").endsWith('signup_wall_wrapper'))
  if (signupWalls.length > 0) signupWalls.forEach(wall => body.removeChild(wall))
  let filteredBodyClass = body.className
  bannedBodyClasses.forEach(className => filteredBodyClass = filteredBodyClass.replace(className, ""))
  if (body.className !== filteredBodyClass) body.className = filteredBodyClass
}
window.addEventListener('load', run)
