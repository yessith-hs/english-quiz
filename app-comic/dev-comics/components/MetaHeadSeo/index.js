import Head from "next/head"

export const MetaHeadSeo = ({title,description}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
