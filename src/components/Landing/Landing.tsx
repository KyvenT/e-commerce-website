import { Button } from "../ui/button";

function Landing() {
  return (
    <div className="h-full flex flex-col sm:flex-row">
      <section className="flex-1 flex justify-center items-center border border-black py-16">
        <div className="w-[70%] flex flex-col gap-2">
          <h1 className="text-4xl font-medium">CAT BRAND</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            ratione quam fuga repellendus reprehenderit, exercitationem, quae
            voluptate ad ex distinctio hic. Placeat repudiandae sit, molestias
            ipsam suscipit nesciunt blanditiis nulla impedit, quos aliquam
            magnam illum fuga optio eius maiores dolores harum nam molestiae at
            sunt rem provident explicabo. Ducimus minima, vel nostrum deserunt
            dolorum corrupti doloremque aliquid harum dolores eligendi, modi
            totam ut. Doloribus quasi ducimus, deleniti magni rerum quam culpa
            eaque, adipisci, minus similique praesentium soluta quidem
            asperiores numquam saepe aliquid unde beatae eveniet. Voluptate ut
            numquam porro eligendi quaerat earum? Tempora eos quo amet itaque ex
            ut qui.
          </p>
          <Button className="text-lg font-medium text-white w-fit cursor-pointer">
            Join our brand
          </Button>
        </div>
      </section>
      <section className="flex-1 flex justify-center items-center border border-black py-16">
        <div className="w-[70%] flex flex-col justify-center items-center">
          <h3>Featured products</h3>
          <div className="w-full h-[300px] border border-black"></div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
