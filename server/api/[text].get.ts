import { serverSupabaseClient } from '#supabase/server'
export default defineEventHandler(async event => {
	const { text }: any = event.context.params
	const client: any = serverSupabaseClient(event)
	const { error } = await client.from('list').insert({ title: text, status: false })
	return { success: text }
})
