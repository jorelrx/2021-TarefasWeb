import Head from 'next/head'

import AppNavBar from '../components/AppNavBar'

import AppCardBullets from '../components/AppCardBullets'

export default function Home() {

  let title = "Meu primeiro Web App"
  const bullets_today = [
    {type: 'event', key: 1, title: "Momento sincrono sobre componentes react"},
    {type: 'task', key: 2, title: "Palavras chaves - bullet, github"}
  ]
  const bullets_tomorrow = [
    {type: 'task', key: 1, title: 'Priorizar as palavras chaves'},
    {type: 'task', key: 2, title: 'Pesquisar imagens das princeipais palavras chaves'},
    {type: 'task', key: 3, title: 'Prototipar UI'}
  ]

  return (
    <div>
      <Head>
        <title>Create Joel Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AppNavBar title={title}></AppNavBar>
        <AppCardBullets date={"17/02/2022"} bullets = {bullets_today}></AppCardBullets>
        <AppCardBullets date={"22/02/2022"} bullets = {bullets_tomorrow}></AppCardBullets>
      </main>
    </div>
  )
}
