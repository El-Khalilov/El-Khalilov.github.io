const projectsData = [
  {
    'type': 'app',
    'id': 'clafermps',
    'name': 'ClaferMPS',
    'thumb': 'thumb.jpg',
    'short_description': 'A set of extensible languages and an IDE for modeling E/E architectures using the Clafer modeling language',
    'description': `
       <p>
         ClaferMPS is an implementation of <a href='http://www.clafer.org/'>Clafer</a> in <a href='https://www.jetbrains.com/mps/'>JetBrains Meta-Programming System (MPS)</a>.
         It also includes an Architecture DSL, which implements
         an adaptation of <a href='https://uwspace.uwaterloo.ca/handle/10012/10632' target='_blank'>EAST-ADL reference model</a> for early modeling of
         automotive Electric/Electronic architectures.
       </p>
       <p>
          ClaferMPS implements full Clafer and provides:
       </p>
       <ul class='bulletList'>
         <li>a smart structured editor with autocompletion and many intentions,</li>
         <li>type system,</li>
         <li>module system,</li>
         <li>generator of plain-text Clafer.</li>
       </ul>
       <p>The Architecture DSL</p>
       <ul class='bulletList'>
         <li>technical feature model, functional analysis architecture, hardware design architecture, and separate
           functional to hardware architecture deployment specification,</li>
         <li>editable textual and graphical projections,</li>
         <li>semantic error checking according to the reference model,</li>
         <li>separate definition of quality attributes,</li>
         <li>  generation of plain Clafer separate for every module with and without quality attributes.</li>
       </ul>
    `,
    'date': '2014 - 2017',
    'technologies': ['Java', 'JetBrains MPS', 'mbeddr'],
    'authors': ['Eldar Khalilov', 'Markus Voelter', 'Jordan Ross', 'Michał Antkiewicz', 'Krzysztof Czarnecki'],
    'source': 'https://github.com/gsdlab/ClaferMPS',
    'publications': [ {
      'title': 'ClaferMPS: Modeling and Optimizing Automotive Electric/Electronic Architectures Using Domain-Specific Languages',
      'url': 'https://uwspace.uwaterloo.ca/handle/10012/11249'
    }, {
      'title': 'Modeling and Optimizing Automotive Electric/Electronic (E/E) Architectures: Towards Making Clafer Accessible to Practitioners',
      'url': 'https://link.springer.com/chapter/10.1007/978-3-319-47169-3_37'
    } ],
    'slider': [
      'slider/slide.jpg',
      'slider/slide2.jpg',
      'slider/slide3.jpg'
    ],
    'contribution': `
      <p>
        Most of the development process: architecture, DSL design, MPS implementation
      </p>
    `
  },
  {
    'type': 'app',
    'id': 'webtools',
    'name': 'Clafer Web Tools',
    'thumb': 'thumb.jpg',
    'short_description': 'Web-based tools for modeling, visualization and exploration of variability models',
    'description': `
       <p>
          Clafer Web Tools is a tool set that consists of three tools: ClaferIDE, ClaferConfigurator, ClaferMooVisualizer.
          All three share the same platform, but designed for different purposes.
       </p>
       <p>
          <a href='https://github.com/gsdlab/ClaferIDE' target='_blank'>ClaferIDE</a> is focused on development using Clafer: you can enjoy syntax
          highlighting, indentations,
          expanding/collapsing levels, thanks to ACE text editor. Once you wrote your model, you can
          compile it, and see whether there are syntax errors. The output is shown in various formats:
          HTML, XML, a code for graphical tools, and special output formats like Python, ChocoJS and Alloy to be
          used further in instantiation Once compilation is successful, you can run your model using one of the solvers offered.
       </p>
       <p>
         <a href='https://github.com/gsdlab/ClaferConfigurator' target='_blank'>ClaferConfigurator</a> is designed for generating constraints
           based on instance desirability. You can generate
         instances gradually, and see whether the instances are something that you need.
       </p>
       <p>
         <a href='https://github.com/gsdlab/ClaferMooVisualizer' target='_blank'>ClaferMooVisualizer</a> computes optimal instances and visualizes
           them. Allows interactive exploration of Pareto fronts,
         filtering by qualities or features, exporting instances.
       </p>
    `,
    'date': '2014 - 2017',
    'technologies': ['JavaScript', 'HTML', 'CSS', 'Node.js', 'jQuery'],
    'authors': ['Alexandr Murashkin', 'Neil Redman', 'Michał Antkiewicz', 'Eldar Khalilov'],
    'images': [
      'slider/slide1.jpg',
      'slider/slide2.jpg',
      'slider/slide3.jpg',
      'slider/slide4.jpg'
    ],
    'contribution': `
      <p>
        Code refactoring and optimization, unit testing
      </p>
    `
  },
  {
    'type': 'app',
    'id': 'stippling',
    'name': 'Voronoi Stippler',
    'thumb': 'thumb.jpg',
    'short_description': 'A tool for creating vector graphic stippled illustrations from greyscale images using weighted centroidal Voronoi diagrams',
    'description': `
       <p>
        The Voronoi Stippler is a tool that creates stippling art in SVG format based on an input raster image. <a href='https://en.wikipedia.org/wiki/Stippling'>Stippling</a> is
        a technique of simulation of continuous graduations of light and shade through the use of small, discrete
        dots or strokes. The dots can potentially vary in size, color and shape.
       </p>

       <p>
         My implementation is based on <a href='http://dl.acm.org/citation.cfm?id=508530.508537'>Adrian Secord’s algorithm</a>, which uses
         cetroidal <a href='https://en.wikipedia.org/wiki/Voronoi_diagram'>Voronoi diagrams</a> and a weighted
         variation of the iterative <a href='https://en.wikipedia.org/wiki/Lloyd's_algorithm'>Lloyd's method</a> to distribute the dots according to the tone of the image.
         This project is one of the assignments of <a href='http://isohedral.ca/teaching/cs-791-spring-2015/'>CS 791 Non-Photorealistic Rendering course</a> that I took in Fall
         of 2015, at the University of Waterloo. The full assignment specification is available <a href='http://isohedral.ca/teaching/cs-791-spring-2015/assignment-1/'>here</a>.
       </p>

    `,
    'date': '2015',
    'technologies': [ 'Proccessing 3' ],
    'authors': [ 'Eldar Khalilov' ],
    'source': 'https://github.com/El-Khalilov/voronoi_stippler',
    'images': [
      'images/slide1.jpg'
    ]
  },
  {
    'type': 'app',
    'id': 'knotwork',
    'name': 'Knotwork',
    'thumb': 'thumb.jpg',
    'short_description': 'Interactive Celtic Knots Generator',
    'description': `
       <p>
        A simple tool to design Celtic knots using the method described
        in Peter Cromwell's article <a href='https://link.springer.com/article/10.1007%2FBF03025256'>"Celtic knotwork: mathematical art".</a>
        The program accepts an input file giving the size of the grid and the
        locations of break markers, and produce as output a vector image of the corresponding knotwork.
       </p>

       <p>
         This project is one of the assignments of <a href='http://isohedral.ca/teaching/cs-791-spring-2015/'>CS 791 Non-Photorealistic Rendering course</a> that I took in Fall
         of 2015, at the University of Waterloo. The full assignment specification is available <a href='http://isohedral.ca/teaching/cs-791-spring-2015/assignment-3/'>here</a>.
       </p>

    `,
    'date': '2015',
    'technologies': [ 'HTML/CSS, JavaScript, paper.js, t3.js' ],
    'authors': [ 'Eldar Khalilov' ],
    'images': [
      'images/slide1.jpg',
      'images/slide2.jpg',
      'images/slide3.jpg'
    ]
  },
  {
    'type': 'app',
    'id': 'islamicstars',
    'name': 'Islamic Stars',
    'thumb': 'thumb.jpg',
    'short_description': 'Interactive Islamic Star Generator',
    'description': `
       <p>
         A web-based application to produce Islamic star patterns using the polygons-in-contact
         method described in <a href='http://www.cgl.uwaterloo.ca/csk/papers/gi2005.html'>"Islamic Star Patterns from Polygons in Contact"</a> by Craig S. Kaplan.
         The program accepts the specification or name of a tiling and a contact angle,
         and produce a vector graphics file containing the corresponding star pattern.
       </p>

       <p>
         This project is one of the assignments of <a href='http://isohedral.ca/teaching/cs-791-spring-2015/'>CS 791 Non-Photorealistic Rendering course</a> that I took in Fall
         of 2015, at the University of Waterloo. The full assignment specification is available <a href='http://isohedral.ca/teaching/cs-791-spring-2015/assignment-4/'>here</a>.
       </p>

    `,
    'date': '2015',
    'technologies': [ 'HTML/CSS, JavaScript, paper.js, t3.js' ],
    'authors': [ 'Eldar Khalilov' ],
    'images': [
      'images/slide.jpg',
      'images/slide1.svg',
      'images/slide2.svg',
      'images/slide3.svg'
    ]
  },
  {
    'type': 'website',
    'id': 'yachtstarship',
    'name': 'Yacht StarShip',
    'thumb': 'thumb.jpg',
    'date': '2016',
    'technologies': ['HTML', 'CSS', 'JavaScript'],
    'contribution': 'Frontend Development',
    'link': 'http://www.yachtstarship.com/',
    'images': [
      'images/slide1.jpg'
    ]
  },
  {
    'type': 'website',
    'id': 'vip',
    'name': 'VIP Eye Care & Optical Boutique',
    'thumb': 'thumb.jpg',
    'date': '2016',
    'technologies': ['HTML', 'CSS', 'JavaScript'],
    'contribution': 'Frontend Development',
    'link': 'http://vip4myeyes.com/',
    'images': [
      'images/slide1.jpg'
    ]
  },
  {
    'type': 'website',
    'id': 'mip',
    'name': 'Medicare Information Project',
    'thumb': 'thumb.jpg',
    'date': '2016',
    'technologies': ['HTML', 'CSS', 'JavaScript'],
    'contribution': 'Frontend Development',
    'link': 'http://medicareinfopro.com/',
    'images': [
      'images/slide1.jpg'
    ]
  },
  {
    'type': 'website',
    'id': 'amavida',
    'name': 'Amavida Coffee',
    'thumb': 'thumb.jpg',
    'date': '2016',
    'technologies': ['HTML', 'CSS', 'JavaScript'],
    'contribution': 'Frontend Development',
    'link': 'https://amavida.com/',
    'images': [
      'images/slide1.jpg'
    ]
  },
  {
    'type': 'website',
    'id': 'walinks',
    'name': 'Western Area, The Links, Incorporated',
    'thumb': 'thumb.jpg',
    'date': '2015',
    'technologies': ['HTML', 'CSS', 'JavaScript'],
    'contribution': 'Frontend Development',
    'link': 'http://walinks.org/',
    'images': [
      'images/slide1.jpg'
    ]
  },
  {
    'type': 'website',
    'id': 'oneil',
    'name': 'Matt O\'Neill Real Estate',
    'thumb': 'thumb.jpg',
    'date': '2014',
    'technologies': ['HTML', 'CSS', 'JavaScript'],
    'contribution': 'Frontend Development',
    'images': [
      'images/screen-1.jpg',
      'images/screen-2.jpg',
      'images/screen-3.jpg'
    ]
  },
  {
    'type': 'website',
    'id': 'lion',
    'name': 'International Lion of Judah Conference 2014',
    'thumb': 'thumb.jpg',
    'date': '2014',
    'technologies': ['HTML', 'CSS', 'JavaScript'],
    'contribution': 'Frontend Development',
    'images': [
      'images/screen-1.jpg',
      'images/screen-2.jpg',
      'images/screen-3.jpg'
    ]
  },
  {
    'type': 'website',
    'id': 'zahira',
    'name': 'Eventus By Zahira',
    'thumb': 'thumb.jpg',
    'date': '2014',
    'link': 'http://www.eventusbyzahira.com/',
    'technologies': ['HTML', 'CSS', 'JavaScript'],
    'contribution': 'Frontend Development',
    'images': [
      'images/screen-1.jpg',
      'images/screen-2.jpg',
      'images/screen-3.jpg'
    ]
  }
  // {
  //   'type': 'website',
  //   'id': 'oneil3',
  //   'name': 'International Lion of Judah Conference 2014',
  //   'thumb': 'oneil/thumb2x.jpg',
  //   'date': '2014'
  // },
  // {
  //   'type': 'website',
  //   'id': 'oneil4',
  //   'name': 'International Lion of Judah Conference 2014',
  //   'thumb': 'oneil/thumb2x.jpg',
  //   'date': '2014'
  // },
  // {
  //   'type': 'website',
  //   'id': 'oneil5',
  //   'name': 'International Lion of Judah Conference 2014',
  //   'thumb': 'oneil/thumb2x.jpg',
  //   'date': '2014'
  // }

];

export { projectsData };
