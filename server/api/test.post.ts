export default defineEventHandler(async req => {
	const body = await readBody(req)
	console.log(body)
	return {
		message: body
	}
})
