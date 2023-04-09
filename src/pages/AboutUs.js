import React from 'react'

function AboutUs() {
  return (
     <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">About Us</h2>
            <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia ex eu enim maximus tristique. Phasellus ornare risus ut finibus dignissim.</p>
            <p className="text-lg mb-8">Sed vitae ultrices nisi. Donec lacinia, quam sed efficitur fringilla, mi massa faucibus leo, ut pulvinar odio nibh et lacus. Nunc placerat mauris a erat sodales aliquet. Maecenas vestibulum libero at ante eleifend, id tristique dui ornare. Vivamus tincidunt purus et urna consectetur, ac egestas velit viverra.</p>
            <p className="text-lg mb-8">Praesent malesuada augue nec faucibus ullamcorper. Suspendisse et interdum diam. Aenean felis lorem, tempor vitae rutrum quis, fermentum vel est. Morbi quis tincidunt velit, at pulvinar eros.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AboutUs