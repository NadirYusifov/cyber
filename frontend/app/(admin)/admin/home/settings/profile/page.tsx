import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
// import Image from 'next/image'

export default function Profile() {
  return (
    <section className="w-full mt-5">
      <div className="container mx-auto px-4">
        <article>
          <h3 className="text-[3rem] font-medium mb-10">Profile</h3>
        </article>
        <div className="w-full h-fit items-center bg-white-smoke rounded-lg border border-zinc-300 p-10">
          <div className="mb-10">
            <Avatar className="w-16 h-16 border border-zinc-800">
              <AvatarImage src="" alt="avatar image" />
              <AvatarFallback className="bg-dark-charcoal text-white text-[1.6rem]">a</AvatarFallback>
            </Avatar>
          </div>
          <article>
            <div className="flex items-center space-x-1">
              <p className="text-zinc-600">Name:</p>
              <p>admin</p>
            </div>
            <div className="flex items-center space-x-1">
              <p className="text-zinc-600">Password:</p>
              <input type="password" readOnly />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
