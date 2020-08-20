step('Go to home page', async (page, params) => {
    await page.goto(params.homepage)
})

step('Go to login page', async (page, params) => {
    await page.go('a')
})

step('Enter username and password', async (page) => {
    await page.fill('input[name=username]', 'hamid')
    await page.fill('input[name=password]', 'test-pass')
})

step('submit form', async (page) => {
    await (await page.$('form')).evaluate(form => form.submit())
})
