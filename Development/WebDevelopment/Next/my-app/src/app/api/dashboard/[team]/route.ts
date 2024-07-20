 type Params = {
     team: string
   }
   
   export async function GET(request: Request, context: { params: Params }) {
    const team = context.params.team // '1'
    const body = await request.json();
    // const query = request.query;
    const headers = request.headers;
   }