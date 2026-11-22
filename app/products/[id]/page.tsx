type Props = {
    params: Promise<{
        id: string,
    }>,
    searchParams: Promise<{
        name?: string,
        value?: string,
    }>
}
type Data = Record<string, string | undefined>

const ProductPage = async ({ params, searchParams }: Props) => {
    const [{ id }, { name = '', value = '' }] = await Promise.all([params, searchParams])
    const data: Data = { id, name, value }
    console.log('data', data)
    return (
        <div>ProductPage {id} {name} {value}</div>
    )
}

export default ProductPage