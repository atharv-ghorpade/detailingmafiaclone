import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";

const galleryImages = {
  all: [
    {
      url: "https://images.unsplash.com/photo-1629281066736-ff3a1e6b36d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmd8ZW58MXx8fHwxNzYxNzQ0NzAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Premium Detailing",
      category: "exterior",
    },
    {
      url: "https://images.unsplash.com/photo-1572359249699-5ced96364f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwY29hdGluZyUyMGNhcnxlbnwxfHx8fDE3NjE3NTk1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Ceramic Coating",
      category: "coating",
    },
    {
      url: "https://images.unsplash.com/photo-1656077885491-3922185f3932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnRlcmlvciUyMGRldGFpbGluZ3xlbnwxfHx8fDE3NjE3NTc2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Interior Detailing",
      category: "interior",
    },
    {
      url: "https://images.unsplash.com/photo-1759646848818-0726eefd7988?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYXIlMjBwb2xpc2h8ZW58MXx8fHwxNzYxNzU5NjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Paint Correction",
      category: "exterior",
    },
    {
      url: "https://images.unsplash.com/photo-1742056024244-02a093dae0b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXJ8ZW58MXx8fHwxNzYxNjc4ODcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "PPF Installation",
      category: "coating",
    },
    {
      url: "https://images.unsplash.com/photo-1759825045061-ac853e131f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXNoaW5nJTIwc2VydmljZXxlbnwxfHx8fDE3NjE2NTcxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Steam Wash",
      category: "exterior",
    },
  ],
};

export function Gallery() {
  const [selectedTab, setSelectedTab] = useState("all");

  const filteredImages =
    selectedTab === "all"
      ? galleryImages.all
      : galleryImages.all.filter(
          (img) => img.category === selectedTab,
        );

  return (
    <section id="gallery" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-900 px-4 py-2 rounded-full mb-4">
            Our Gallery
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Our Work{" "}
            <span className="text-blue-900">
              Speaks For Itself
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See the transformation we bring to every vehicle
            that comes through our doors
          </p>
        </div>

        {/* Tabs */}
        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={setSelectedTab}
        >
          <TabsList className="grid w-full max-w-2xl mx-auto color-white grid-cols-4 mb-12 bg-gray-900">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-blue-900 color-white"
            >
              All Work
            </TabsTrigger>
            <TabsTrigger
              value="exterior"
              className="data-[state=active]:bg-blue-900 color-white"
            >
              Exterior
            </TabsTrigger>
            <TabsTrigger
              value="interior"
              className="data-[state=active]:bg-blue-900 color-white"
            >
              Interior
            </TabsTrigger>
            <TabsTrigger
              value="coating"
              className="data-[state=active]:bg-blue-900 color-white"
            >
              Coating
            </TabsTrigger>
          </TabsList>

          <TabsContent value={selectedTab}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-xl cursor-pointer"
                >
                  <ImageWithFallback
                    src={image.url}
                    alt={image.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl mb-2">
                        {image.title}
                      </h3>
                      <div className="w-12 h-1 bg-blue-900"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}