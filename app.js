// PUT YOUR CODE HERE

const timelineBox = gsap.timeline()

timelineBox
    .from('.red', {
        top: '-200px' , left: "-200", duration: 1
})
    .from('.green', {
        top: '-200', right: '-200', duration: 1
})
    .from('.blue', {
        bottom: "-200", right: '-200', duration: 1
})
    .from('.yellow', {
        bottom: '-200', left: '-200', duration: 1
})  
    .to('.red', {
        x: -200 ,left: '100vw', borderRadius: '50%', backgroundColor: 'green', duration: 1})
    .to('.green', {
        y: -200, top: '100vh', borderRadius: '50%', backgroundColor: 'blue', duration: 1}, '<')
    .to('.blue', {
        y: '-200', x: 200, right: '100vw', top: '100vh', borderRadius: '50%', backgroundColor: 'yellow', duration: 1}, '<')
    .to('.yellow', {
        right: '100vw', top: '0', borderRadius: '50%', backgroundColor: 'red', duration: 1}, '<')
    //moving out the viewport
    .to('.yellow', {x: '-200', duration: 1})
    .to('.red', {x: 0, duration: 1}, '<')
    .to('.green', {right: '-200', duration:1}, '<')
    .to('.blue', {x: 0, duration: 1}, '<')