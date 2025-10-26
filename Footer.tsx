import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Decoding Emotions
            </h3>
            <p className="text-muted-foreground">
              AI-powered emotion detection for social media content analysis
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#analyzer" className="hover:text-primary transition-colors">
                  Analyzer
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <a href="mailto:contact@example.com">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Decoding Emotions. Made with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for better understanding
          </p>
        </div>
      </div>
    </footer>
  );
};
