import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


const Banner = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="outline">
              Online
              <ArrowUpRight className="ml-2 size-4" />
            </Badge>
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-5xl">
             Online Manipal
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-md">
              Online Manipal is a platform for online learning.
            </p>
            <div className="flex mb-4 w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button asChild className="w-full sm:w-auto">
                <a href={"/"}>Apply Now</a>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a href={"/"}>
                  brochure
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-md">
              Admission Closing In 5 Days
            </p>
          </div>

          <img
            src={`/Frontbanner.jpg`}
            alt="image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
