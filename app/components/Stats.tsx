import {Montserrat,Poppins} from 'next/font/google'

const Mont = Montserrat({
  subsets:["latin"],
  weight:["800"]
});
const Pop = Poppins({
  subsets:["latin"],
  weight:["200","300"]
});


const stats = [
    { id: 1, name: 'Active Users', value: '2K' },
    { id: 2, name: 'Blogs Category', value: '5+' },
    { id: 3, name: 'Blogs', value: '100' },
  ]
  
  export default function Stats() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className={`${Pop.className} text-base/7 text-indigo-500`}>{stat.name}</dt>
                <dd className={`${Mont.className} order-first text-3xl font-semibold tracking-tight text-indigo-500 sm:text-5xl`}>
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  