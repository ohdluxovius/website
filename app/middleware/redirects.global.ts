export default defineNuxtRouteMiddleware(async (to, _) => {
    const redirects = await queryCollection('redirects').all()
    const redirect = redirects.find((r) => r.from === to.path)
    if (redirect) {
        return navigateTo(redirect.to, {external: true})
    }
})
