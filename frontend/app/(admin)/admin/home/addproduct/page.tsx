import { Input } from "@/components/ui/input";

export default function AddProduct() {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4">
        <article className="mb-10">
          <h3 className="text-[3rem]">Add product</h3>
        </article>
        <div>
          <Input className="w-[31.25rem] h-72" type="file" />
        </div>
      </div>
    </section>
  )
}
