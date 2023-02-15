export default defineEventHandler(async req => {
	const body = await readBody(req)

	return {
		message: body
	}
})
