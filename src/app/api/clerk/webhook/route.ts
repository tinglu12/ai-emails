// /api/clerk/webhook

export const POST = async (req: Request) =>{
    const {data} = await req.json()
    console.log('clerk webhook-received', data)

    return new Response('Webhook receiverd', {status: 200})

}