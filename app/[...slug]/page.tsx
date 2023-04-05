const loadData = async (slug: string): Promise<{ slug: string }> => {
  return new Promise((r) => setTimeout(() => r({ slug }), 2000));
};

export const revalidate = 60;

export default async function DetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await loadData(params.slug);
  return (
    <main>
      <h1>Detail Page</h1>
      <p>Slug: {data.slug}</p>
    </main>
  );
}
