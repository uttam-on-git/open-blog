import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs'
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-400">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap font-semibold
         dark:text-white text-4xl"
            >
              <span
                className="px-2 py-1 bg-gradient-to-r from-indigo-600
         rounded-lg text-black"
              >
                Open blog
              </span>
            </Link>
          </div>
          <div
            className="grid grid-cols-2 gap-9 mt-4 sm:grid-cols-3
        sm:gap-6"
          >
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.romendra.uttam.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Uttam's Portfolio
                </Footer.Link>
                <Footer.Link
                  href="https://www.open.uttam.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Uttam's Blog/Open Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="FOLLOW US" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Github
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="LEGAL" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.romendra.uttam.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  href="https://www.open.uttam.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex
        sm:items-center sm:justify-between ">
          <Footer.Copyright
            href="'#"
            by="Uttam's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsGithub}/>
            <Footer.Icon href='#' icon={BsTwitter}/>
          </div>
        </div>
      </div>
    </Footer>
  );
}
