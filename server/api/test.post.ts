import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async event => {
	const body = await readBody(event)
	const client: any = serverSupabaseClient(event)
	const { error } = await client.from('list').insert({ title: body.title, status: false })
	return { success: error }
})
