import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col items-center justify-center p-3 text-center border border-teal-500 sm:flex-row rounded-tl-3xl rounded-br-3xl">
      <div className="flex flex-col justify-center flex-1">
        <h2 className="text-2xl">Want to learn more about My Project?</h2>
        <p className="my-2 text-gray-500">Checkout these Projects</p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-bl-none rounded-tl-xl"
        >
          <a
            href="https://github.com/HadiKa47"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hadi Alkari
          </a>
        </Button>
      </div>
      <div className="flex-1 p-7">
        <img src="https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png" />
      </div>
    </div>
  );
}
