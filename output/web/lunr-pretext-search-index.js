var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface      These notes give a basic introduction to Lebesgue measure and Lebesgue integration, suitable for an advanced undergraduate Real Analysis course. They are meant to supplement Jay Cummings's Real Analysis: A Long-Form Mathematics Textbook , edition and are written in a similar style.  The notes assume that you've covered at least Chapters 1, 2, 3, 5, 6, and 8 in Jay's book. It is helpful, but not strictly necessary, to have covered Sections 9.1 and 9.2 to introduce the idea of sequences of functions. Series (Chapter 4) and Differentiation (Chapter 7) aren't necessary for these notes.  Chapter 10 introduces the idea of a measure and a -algebra, defines the Lebesgue outer measure, Lebesgue measure, and measurable functions. I focus on Lebesgue measure specifically; more general ideas of measure aren't addressed.  Chapter 11 defines the Lebesgue integral using the simple functions approach. Whenever possible I take a very similar approach to Chapter 8's development of Darboux integration, intentionally using parallel notation and making links between the ideas. Most of the focus is on integrating simple functions and bounded functions, with only one section addressing general Lebesgue integration and one involving integrating sequences of functions.  I have personally used these notes in our second semester senior Real Analysis elective. Our pacing puts Chapters 1--6 in the first semester, sometimes touching a bit on differentiation from Chapter 7. Then the second semester covers Chapters 7 and 8 in the first seven weeks of the semester, and uses these notes (Chapters 10 and 11) for the second half. These notes have almost exactly enough material to fill 7 weeks. I include a day of pathological examples every one or two weeks to illustrate some of the key ideas, which could be expanded or contracted as needed.  Please let me know if you use these notes, and if so, how well they worked for you. Feel free also to contact me with edits, errors, praise, and complaints (or not): clarkdav@gvsu.edu .  --David Clark  Grand Valley State University, Allendale, Michigan  p.s. Thanks especially to my MTH 409 students from Winter 2025, who were my -testers and an incredibly good-natured bunch.  "
},
{
  "id": "sec-1-measuring-sets",
  "level": "1",
  "url": "sec-1-measuring-sets.html",
  "type": "Section",
  "number": "10.1",
  "title": "Measuring Sets",
  "body": " Measuring Sets  Here's a reminder of Definition 8.22 with slightly different notation:   Interval length  The length of the interval is equal to , and is denoted . This is also the length of , , and . Intervals that involve are defined to have length .   This is a nice and simple way to measure the length of one interval. What about sets that aren't intervals? In this chapter, we'll see how to do exactly that.  For example, suppose . We would like the length of to be 6, since that's the sum of the lengths of the intervals that make it up. Note that , as we've defined it, doesn't allow us to do this. That isn't too hard to fix, but it still needs to be fixed. On the other hand, what should we call the length of ? This doesn't contain any intervals but is also infinitely large. As we've seen before, the length (really size ) of is in fact zero, at least under one possible definition.  The new idea we need is called a measure. A measure is a set function, that is, a function whose domain includes subsets of . Its codomain is the extended real numbers , that is, . The extended real numbers let us say, as we want to, that the measure of some sets is .  Here are some nice properties that we would like any measure to have:    is defined for every subset . In other words, the domain of is , the power set of the real numbers.  For any interval , , and too.   is countably additive . That is, if is a countable collection of disjoint sets, then .   is invariant under translation . That is, if is some set, , and , then .   Go back and think about what each of these properties means and why it is important. Once you've done that, here's an explanation (don't continue until you've thought through each property!):   We want to be able to measure every possible set.  A measure should give the result we expect for intervals: the interval's length.  If a set is made up of a bunch of disjoint parts, then we can measure those parts separately and add them up to get the set's entire measure.  This one requires some more explanation. Think about the interval . Then . You can imagine this as sliding (aka translating) by 3 units to the right on a number line. This item says that translating shouldn't change the measure of , because we haven't changed anything important about how the numbers in are arranged.    Unfortunately, this is a fool's errand: no set function can satisfy all four of these properties.  Wait, what?  Amazingly, it's not even known if there is a set function that satisfies just properties #1, #2, and #3 at the same time.  The best solution is to give ourselves some wiggle room on #1: We allow a measure to be defined only on certain subsets of the real numbers, but not all of them. This unfortunately means that there will always be some nonmeasurable sets. We would nonetheless like to be able to measure as many sets as possible.  We do require a little bit of structure, however. Here's an important definition:   -algebra  A -algebra (pronounced \"sigma-algebra\") is a collection of subsets of that satisfies the following properties:   Closure under complements: If then .  Closure under countable unions: If is a countable collection of subsets in , then .  Closure under countable intersections: If is a countable collection of subsets in , then .    In the above definitions, \"countable\" also includes \"finite\". For example, property #2 implies that if and are subsets in , then too.  This definition is pretty abstract, but the good news is that you're already familiar with at least one -algebra:   is a -algebra  The set of all subsets of , that is , is a -algebra. For any given collection of sets of real numbers, their unions, intersections, and complements are also a set of real numbers (possibly an empty one).   Here's a slightly more interesting example:   A finite -algebra  Let . Then is a -algebra. You should double-check each property.   The way to think about a -algebra is that it's a bunch of sets in which you can take complements, unions, and intersections without having to worry about somehow ending up with a set that's not allowed. There is one limit: You can't take too \"big\" of an intersection or union -- only countably many sets at a time.  A -algebra is exactly what we need to make measure functions work. Unfortunately, it's too much to ask that we can measure all of , but a slightly smaller -- but still ginormous -- collection of sets will be measurable. That set will be a -algebra as well. The rest of this chapter is all about how we can do this. We're finally ready to carefully define a measure:   Let be a -algebra. A function is called a \\textbf{measure} if it has all of these properties:   Non-negativity:  for all .  .  Countable additivity: For any countable collection of disjoint sets in , .    Some of our \"nice properties\" are missing from this definition. The definition of measure is very general and applies in situations where intervals don't even make sense. In the following sections, we will develop an example of a measure that also satisfies for each interval and is invariant under translation.  "
},
{
  "id": "sec-1-measuring-sets-3",
  "level": "2",
  "url": "sec-1-measuring-sets.html#sec-1-measuring-sets-3",
  "type": "Definition",
  "number": "10.1.1",
  "title": "Interval length.",
  "body": " Interval length  The length of the interval is equal to , and is denoted . This is also the length of , , and . Intervals that involve are defined to have length .  "
},
{
  "id": "sec-1-measuring-sets-6",
  "level": "2",
  "url": "sec-1-measuring-sets.html#sec-1-measuring-sets-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "measure extended real numbers "
},
{
  "id": "sec-1-measuring-sets-13",
  "level": "2",
  "url": "sec-1-measuring-sets.html#sec-1-measuring-sets-13",
  "type": "Definition",
  "number": "10.1.2",
  "title": "<span class=\"process-math\">\\(\\sigma\\)<\/span>-algebra.",
  "body": " -algebra  A -algebra (pronounced \"sigma-algebra\") is a collection of subsets of that satisfies the following properties:   Closure under complements: If then .  Closure under countable unions: If is a countable collection of subsets in , then .  Closure under countable intersections: If is a countable collection of subsets in , then .   "
},
{
  "id": "sec-1-measuring-sets-16",
  "level": "2",
  "url": "sec-1-measuring-sets.html#sec-1-measuring-sets-16",
  "type": "Example",
  "number": "10.1.3",
  "title": "<span class=\"process-math\">\\(\\mathcal{P}(\\R)\\)<\/span> is a <span class=\"process-math\">\\(\\sigma\\)<\/span>-algebra.",
  "body": " is a -algebra  The set of all subsets of , that is , is a -algebra. For any given collection of sets of real numbers, their unions, intersections, and complements are also a set of real numbers (possibly an empty one).  "
},
{
  "id": "sec-1-measuring-sets-18",
  "level": "2",
  "url": "sec-1-measuring-sets.html#sec-1-measuring-sets-18",
  "type": "Example",
  "number": "10.1.4",
  "title": "A finite <span class=\"process-math\">\\(\\sigma\\)<\/span>-algebra.",
  "body": " A finite -algebra  Let . Then is a -algebra. You should double-check each property.  "
},
{
  "id": "defn-measure",
  "level": "2",
  "url": "sec-1-measuring-sets.html#defn-measure",
  "type": "Definition",
  "number": "10.1.5",
  "title": "",
  "body": " Let be a -algebra. A function is called a \\textbf{measure} if it has all of these properties:   Non-negativity:  for all .  .  Countable additivity: For any countable collection of disjoint sets in , .   "
},
{
  "id": "sec-2-outer-measure",
  "level": "1",
  "url": "sec-2-outer-measure.html",
  "type": "Section",
  "number": "10.2",
  "title": "Outer measure",
  "body": " Outer measure  •  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "11.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
