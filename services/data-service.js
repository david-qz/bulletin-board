const SUPABASE_URL = 'https://nwxkvnsiwauieanvbiri.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzAwMzQzNCwiZXhwIjoxOTUyNTc5NDM0fQ.8XIsU0FANdaNeQnT-DojpTL-GTlTPZ4CYZDEetpFpWc';
const TABLE = 'posts';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getPosts() {
    const response = await client
        .from(TABLE)
        .select(`
            title,
            description,
            createdAt: created_at,
            contact
        `)
        .order('created_at', { ascending: false });

    return response.data;
}
