import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-playfair',
})
export default function Home() {
  return (
    
  <main className="bg-[url('/images/bg.jpg')] bg-cover bg-center h-screen min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white flex flex-col items-center justify-start pt-24 pb-12 px-6">
      <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-md border-b border-purple-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        

        <Link href="/" className={` text-purple-400 hover:text-white transition`}>
          PetaInfo
        </Link>
        <div className="space-x-6 text-sm font-medium text-gray-300">
          <Link href="#today" className="hover:text-purple-400 transition">Today&apos;s News</Link>
          <Link href="#hottopic" className="hover:text-purple-400 transition">Hot Topic</Link>
          <Link href="#video" className="hover:text-purple-400 transition">Archive</Link>
        </div>
      </div>
    </nav>

      <header className="text-center mb-12 justify">
        <h1 className={`text-5xl font-bold tracking-tight mb-4  `}>Welcome to PetaInfo</h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto"> Today&apos;s Hot Topic
        </p>
      </header>
      <section className="w-full flex justify-center mt-8">
  <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-white/5 backdrop-blur-300 border border-white/10 rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-semibold mb-3">Today&apos;s Pick</h2>
      {/* NOTE: changed outer <p> to <div> to avoid nested <p> elements which cause React/Next.js
          hydration errors. Keep block text containers as <div> or use <span> for inline
          content instead of nesting <p> inside another <p>. */}
      <div className="text-gray-300">
        <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nunc non nunc eleifend rutrum. Etiam pulvinar faucibus ultrices. Nulla ut vestibulum mi. Aenean eu viverra orci. Quisque lacinia tortor eu erat dignissim commodo. In eu urna ac nisl pharetra rutrum. Etiam quis ultrices massa. Suspendisse dignissim ipsum sem, sit amet pellentesque nunc vehicula eget.

Curabitur at porttitor ligula, ut faucibus quam. Nulla semper sodales massa, ut efficitur magna tristique quis. Nam non tortor tristique, elementum mi quis, faucibus purus. Cras eu sapien eu elit congue congue ut quis elit. Nulla fringilla, neque non feugiat maximus, arcu eros suscipit est, pellentesque cursus purus elit et nulla. Mauris eu egestas elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed eros placerat, porta nulla id, sollicitudin enim. Maecenas sed velit placerat, dignissim erat a, ultrices ex. Integer efficitur, nibh id hendrerit tincidunt, nisl dui pulvinar sapien, in volutpat sem nisl non felis. Aenean varius, augue in tincidunt convallis, massa mauris gravida tellus, quis pellentesque risus risus sodales diam.

Nam et augue ex. In id imperdiet lacus, sed sollicitudin magna. Vestibulum eleifend eleifend interdum. Vestibulum luctus vehicula dolor, volutpat varius dui auctor a. Nullam sagittis diam eu lorem mattis imperdiet. Etiam rhoncus nec dui quis varius. Integer magna lectus, iaculis ut tellus sit amet, commodo consequat orci.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut et varius nibh, eu rutrum neque. Quisque id mi feugiat, molestie metus ut, imperdiet sapien. Nulla arcu sapien, fringilla at tincidunt maximus, fringilla a odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum nec ornare urna. Maecenas lobortis odio risus, sit amet vehicula erat bibendum quis. Integer venenatis aliquam ultrices. In sodales dictum eleifend. Praesent et massa et ex tristique lobortis. Vestibulum suscipit est sed sapien dignissim, a pulvinar odio eleifend. Maecenas aliquet pellentesque turpis non consectetur. Nulla feugiat gravida sapien non viverra.

Praesent fringilla nibh leo, ac vehicula dolor volutpat at. Pellentesque pellentesque ultrices nunc at ullamcorper. Nunc nec enim sed lorem ultrices ultricies a egestas eros. Integer rutrum, mauris a porttitor facilisis, ligula augue feugiat orci, eu efficitur purus velit eget massa. Vestibulum blandit lacus enim, in imperdiet quam sodales nec. Sed vel mauris id eros varius imperdiet. Duis non scelerisque dui. Nam sit amet iaculis risus, a mattis lectus. Aenean ultrices interdum eros, gravida pretium risus vehicula id. Nam eget consequat augue. In ut ligula non felis tincidunt faucibus quis vitae lacus. Nulla consectetur tempor rhoncus.</p>
      </div>
    </div>
    <div className="bg-white/5 backdrop-blur-300 border border-white/10 rounded-2xl p-8 shadow-lg">
      <h2 className="text-3xl font-semibold mb-3">Hot Topic</h2>
      <img src="/images/tes.jpg" alt="Test" className="mb-4" />
      <p className="text-gray-300 mb-6">A curated selection of recent work blending robotics, design, and web engineering.</p>

      <div className="grid md:grid-cols-2 gap-6">
            <article className="p-4 rounded-lg hover:scale-[1.01] transition-transform bg-white/3 border border-white/5">
              <h3 className="text-xl font-semibold"> One</h3>
                    <img src="/images/tes.jpg" alt="Test" className="mb-4" />
              <p className="text-sm text-gray-300">Short description.</p>
            </article>

            <article className="p-4 rounded-lg hover:scale-[1.01] transition-transform bg-white/3 border border-white/5">
              <h3 className="text-xl font-semibold"> Two</h3>
              <img src="/images/tes.jpg" alt="Test" className="mb-4" />
              <p className="text-sm text-gray-300">Short description .</p>
            </article>
             <article className="p-4 rounded-lg hover:scale-[1.01] transition-transform bg-white/3 border border-white/5">
              <h3 className="text-xl font-semibold"> Three</h3>
              <img src="/images/tes.jpg" alt="Test" className="mb-4" />
              <p className="text-sm text-gray-300">Short description.</p>
            </article>
             <article className="p-4 rounded-lg hover:scale-[1.01] transition-transform bg-white/3 border border-white/5">
              <h3 className="text-xl font-semibold"> Four</h3>
              <img src="/images/tes.jpg" alt="Test" className="mb-4" />
              <p className="text-sm text-gray-300">Short description.</p>
            </article>
             <article className="p-4 rounded-lg hover:scale-[1.01] transition-transform bg-white/3 border border-white/5">
              <h3 className="text-xl font-semibold"> Five</h3>
              <img src="/images/tes.jpg" alt="Test" className="mb-4" />
              <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nunc non nunc eleifend rutrum. Etiam pulvinar faucibus ultrices. Nulla ut vestibulum mi. Aenean eu viverra orci. Quisque lacinia tortor eu erat dignissim commodo. In eu urna ac nisl pharetra rutrum. Etiam quis ultrices massa. Suspendisse dignissim ipsum sem, sit amet pellentesque nunc vehicula eget.

Curabitur at porttitor ligula, ut faucibus quam. Nulla semper sodales massa, ut efficitur magna tristique quis. Nam non tortor tristique, elementum mi quis, faucibus purus. Cras eu sapien eu elit congue congue ut quis elit. Nulla fringilla, neque non feugiat maximus, arcu eros suscipit est, pellentesque cursus purus elit et nulla. Mauris eu egestas elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed eros placerat, porta nulla id, sollicitudin enim. Maecenas sed velit placerat, dignissim erat a, ultrices ex. Integer efficitur, nibh id hendrerit tincidunt, nisl dui pulvinar sapien, in volutpat sem nisl non felis. Aenean varius, augue in tincidunt convallis, massa mauris gravida tellus, quis pellentesque risus risus sodales diam.

Nam et augue ex. In id imperdiet lacus, sed sollicitudin magna. Vestibulum eleifend eleifend interdum. Vestibulum luctus vehicula dolor, volutpat varius dui auctor a. Nullam sagittis diam eu lorem mattis imperdiet. Etiam rhoncus nec dui quis varius. Integer magna lectus, iaculis ut tellus sit amet, commodo consequat orci.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut et varius nibh, eu rutrum neque. Quisque id mi feugiat, molestie metus ut, imperdiet sapien. Nulla arcu sapien, fringilla at tincidunt maximus, fringilla a odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum nec ornare urna. Maecenas lobortis odio risus, sit amet vehicula erat bibendum quis. Integer venenatis aliquam ultrices. In sodales dictum eleifend. Praesent et massa et ex tristique lobortis. Vestibulum suscipit est sed sapien dignissim, a pulvinar odio eleifend. Maecenas aliquet pellentesque turpis non consectetur. Nulla feugiat gravida sapien non viverra.

Praesent fringilla nibh leo, ac vehicula dolor volutpat at. Pellentesque pellentesque ultrices nunc at ullamcorper. Nunc nec enim sed lorem ultrices ultricies a egestas eros. Integer rutrum, mauris a porttitor facilisis, ligula augue feugiat orci, eu efficitur purus velit eget massa. Vestibulum blandit lacus enim, in imperdiet quam sodales nec. Sed vel mauris id eros varius imperdiet. Duis non scelerisque dui. Nam sit amet iaculis risus, a mattis lectus. Aenean ultrices interdum eros, gravida pretium risus vehicula id. Nam eget consequat augue. In ut ligula non felis tincidunt faucibus quis vitae lacus. Nulla consectetur tempor rhoncus.</p>
            </article>
             <article className="p-4 rounded-lg hover:scale-[1.01] transition-transform bg-white/3 border border-white/5">
              <h3 className="text-xl font-semibold">Six</h3>
              <img src="/images/tes.jpg" alt="Test" className="mb-4" />
              <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nunc non nunc eleifend rutrum. Etiam pulvinar faucibus ultrices. Nulla ut vestibulum mi. Aenean eu viverra orci. Quisque lacinia tortor eu erat dignissim commodo. In eu urna ac nisl pharetra rutrum. Etiam quis ultrices massa. Suspendisse dignissim ipsum sem, sit amet pellentesque nunc vehicula eget.

Curabitur at porttitor ligula, ut faucibus quam. Nulla semper sodales massa, ut efficitur magna tristique quis. Nam non tortor tristique, elementum mi quis, faucibus purus. Cras eu sapien eu elit congue congue ut quis elit. Nulla fringilla, neque non feugiat maximus, arcu eros suscipit est, pellentesque cursus purus elit et nulla. Mauris eu egestas elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed eros placerat, porta nulla id, sollicitudin enim. Maecenas sed velit placerat, dignissim erat a, ultrices ex. Integer efficitur, nibh id hendrerit tincidunt, nisl dui pulvinar sapien, in volutpat sem nisl non felis. Aenean varius, augue in tincidunt convallis, massa mauris gravida tellus, quis pellentesque risus risus sodales diam.

Nam et augue ex. In id imperdiet lacus, sed sollicitudin magna. Vestibulum eleifend eleifend interdum. Vestibulum luctus vehicula dolor, volutpat varius dui auctor a. Nullam sagittis diam eu lorem mattis imperdiet. Etiam rhoncus nec dui quis varius. Integer magna lectus, iaculis ut tellus sit amet, commodo consequat orci.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut et varius nibh, eu rutrum neque. Quisque id mi feugiat, molestie metus ut, imperdiet sapien. Nulla arcu sapien, fringilla at tincidunt maximus, fringilla a odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum nec ornare urna. Maecenas lobortis odio risus, sit amet vehicula erat bibendum quis. Integer venenatis aliquam ultrices. In sodales dictum eleifend. Praesent et massa et ex tristique lobortis. Vestibulum suscipit est sed sapien dignissim, a pulvinar odio eleifend. Maecenas aliquet pellentesque turpis non consectetur. Nulla feugiat gravida sapien non viverra.

Praesent fringilla nibh leo, ac vehicula dolor volutpat at. Pellentesque pellentesque ultrices nunc at ullamcorper. Nunc nec enim sed lorem ultrices ultricies a egestas eros. Integer rutrum, mauris a porttitor facilisis, ligula augue feugiat orci, eu efficitur purus velit eget massa. Vestibulum blandit lacus enim, in imperdiet quam sodales nec. Sed vel mauris id eros varius imperdiet. Duis non scelerisque dui. Nam sit amet iaculis risus, a mattis lectus. Aenean ultrices interdum eros, gravida pretium risus vehicula id. Nam eget consequat augue. In ut ligula non felis tincidunt faucibus quis vitae lacus. Nulla consectetur tempor rhoncus.</p>
            </article>
            
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-300 border border-white/10 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">Archive List</h2>
                <img src="/images/tes.jpg" alt="Test" className="mb-4" />

          <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nunc non nunc eleifend rutrum. Etiam pulvinar faucibus ultrices. Nulla ut vestibulum mi. Aenean eu viverra orci. Quisque lacinia tortor eu erat dignissim commodo. In eu urna ac nisl pharetra rutrum. Etiam quis ultrices massa. Suspendisse dignissim ipsum sem, sit amet pellentesque nunc vehicula eget.

Curabitur at porttitor ligula, ut faucibus quam. Nulla semper sodales massa, ut efficitur magna tristique quis. Nam non tortor tristique, elementum mi quis, faucibus purus. Cras eu sapien eu elit congue congue ut quis elit. Nulla fringilla, neque non feugiat maximus, arcu eros suscipit est, pellentesque cursus purus elit et nulla. Mauris eu egestas elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed eros placerat, porta nulla id, sollicitudin enim. Maecenas sed velit placerat, dignissim erat a, ultrices ex. Integer efficitur, nibh id hendrerit tincidunt, nisl dui pulvinar sapien, in volutpat sem nisl non felis. Aenean varius, augue in tincidunt convallis, massa mauris gravida tellus, quis pellentesque risus risus sodales diam.

Nam et augue ex. In id imperdiet lacus, sed sollicitudin magna. Vestibulum eleifend eleifend interdum. Vestibulum luctus vehicula dolor, volutpat varius dui auctor a. Nullam sagittis diam eu lorem mattis imperdiet. Etiam rhoncus nec dui quis varius. Integer magna lectus, iaculis ut tellus sit amet, commodo consequat orci.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut et varius nibh, eu rutrum neque. Quisque id mi feugiat, molestie metus ut, imperdiet sapien. Nulla arcu sapien, fringilla at tincidunt maximus, fringilla a odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum nec ornare urna. Maecenas lobortis odio risus, sit amet vehicula erat bibendum quis. Integer venenatis aliquam ultrices. In sodales dictum eleifend. Praesent et massa et ex tristique lobortis. Vestibulum suscipit est sed sapien dignissim, a pulvinar odio eleifend. Maecenas aliquet pellentesque turpis non consectetur. Nulla feugiat gravida sapien non viverra.

Praesent fringilla nibh leo, ac vehicula dolor volutpat at. Pellentesque pellentesque ultrices nunc at ullamcorper. Nunc nec enim sed lorem ultrices ultricies a egestas eros. Integer rutrum, mauris a porttitor facilisis, ligula augue feugiat orci, eu efficitur purus velit eget massa. Vestibulum blandit lacus enim, in imperdiet quam sodales nec. Sed vel mauris id eros varius imperdiet. Duis non scelerisque dui. Nam sit amet iaculis risus, a mattis lectus. Aenean ultrices interdum eros, gravida pretium risus vehicula id. Nam eget consequat augue. In ut ligula non felis tincidunt faucibus quis vitae lacus. Nulla consectetur tempor rhoncus.</p>
        </div>
      </div>
    </section>
    <footer className="mt-16 text-sm text-gray-500">
      &copy; {new Date().getFullYear()} Mirzaldi Pasha. All rights reserved.
    </footer>
  </main>
  )
}