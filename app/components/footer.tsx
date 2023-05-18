import React from "react";
import { Envelope, Github, Medium, Twitter, Linkedin } from "../icons";

type FooterProps = {
	contactMeLinks: string[] ;
};

export default function Footer({ contactMeLinks }: FooterProps) {
  return (
    <footer className="w-full bg-white shadow-footer mt-12 py-4 fixed bottom-0">
      <div className="flex items-center justify-center gap-1">
        <a href={contactMeLinks[0]} target="_blank" aria-label="E-mail">
          <Envelope className="icons_contactme" />
        </a>
        <a href={contactMeLinks[1]} target="_blank" aria-label="Twitter">
          <Twitter className="icons_contactme" />
        </a>
        <a href={contactMeLinks[2]} target="_blank" aria-label="GitHub">
          <Github className="icons_contactme" />
        </a>
        <a href={contactMeLinks[3]} target="_blank" aria-label="LinkedIn">
          <Linkedin className="icons_contactme" />
        </a>
        <a href={contactMeLinks[4]} target="_blank" aria-label="Medium">
          <Medium className="icons_contactme" />
        </a>
      </div>
    </footer>
  );
}
