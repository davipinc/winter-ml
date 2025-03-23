# Winter-ML

*A Web Interactive Markup Language.*

## What is this?

A semantic format for defining quizzes and assessment items using web
technologies.

A viewer that can render a content preview along with the content source using
only a browser.

## Who is this for?

Those wishing to author, preview and style assessment content for the web
without committing to any particular standard.

## Why?

There are many formats for defining quizzes and test content, often closely
coupled with proprietary software for playback of items. Those are powerful
and have their place.

However, writing semantic HTML that looks and previews using no custom tooling
would be a simpler and appropriate option in many cases

This format attempts to be a pragmatic, web-oriented alternative to proprietary
question formats, authoring tools and playback platforms.

## Use Cases

This format might be useful in cases such as:

- **making questions inline** to other web content
- **mastering question items** outside any given system
- **converting documents to web content** with inline interactives
- **improving simple content types** via progressive enhancement
- **increasing accessibility** of existing interactive content
- **allowing item preview** when porting question between systems
- **adding themes** to existing assessment items
- **prototyping a new content type** outside any platform or framework

## Principles

### Use web standards

For many use cases, authoring or storing declarative markup is sufficient
when making assessment content.

HTML provides a means to declare the majority of assessment content very well.

Browser support for elements defining textual inputs and
media is very powerful.

## Keep the semantics separate

If we wrap semantic content with declarative markup that explains how an
interactive is expected to play, we enhance generic semantics with the specifics
of the assessment domain.

This has the chance to help us improve the innate accessibility of our content.

## Extend semantics within web standards

Custom components can be added natively in HTML where we need to add an
assessment specific namespace without adding XML to the mix.

### Keep appearance flexible

We can style our markup independently from the source, and use existing CSS
libraries to enhance the appearance without mixing that in with the declarative,
semantic markup.

### Make compilation optional

It can be efficient or even functionally important to compile content,
for example to remove answers from the source and prevent cheating.

But if we can preview the source directly, we are more likely to do so.

Using HTML and CSS without pre-processing allows content to be edited with
browser tooling.

Removing compilation steps reduces the time to edit and test changes and
simplifies the process. It can make the sources more approachable.

### Combine previewing with playback

Ensure we can preview and test the content editorially and functionally
alongside the question source armed only with a browser.

By doing so we allow an author or reviewer to interact directly with the content
while also seeing other possible answers, distractors and metadata.

We can also show warnings where appropriate without necessitating a playback
platform or dedicated authoring and transformation tool chain.

## Alternatives

This markup and its associated viewer have been built for the lack of a neutral,
web standards option for authoring, previewing and storing assessment items.

Before you consider this web oriented alternative, consider investigating the
well-established alternatives in the space.

Such options are made by companies with visions, road maps, support teams and
feature sets that this little project could never conceivably have.

### Standards

Standards exist to define such content, notably
[QTI](https://www.1edtech.org/standards/qti/index).

Consider these standards and custom formats first if you are authoring content
at scale. If you already chose an authoring tool or playback platform, start
there.

If you learn about the interactive types that QTI supports, you will also have
come a long way towards understanding the kind of question that exist already
and the core terminology such as "distractors", "rubric", "outcomes",
and so forth.

If you are using a Learning Management System already, you should probably
use the content formats best supported in that context. Those systems will
likely support HTML but they may not support direct HTML based authoring, so
this approach might offer no advantage.

Frustratingly, there is no universal standard in assessment items.
So, there is no good way to know that your content will work quite right
unless you play it back in your target platform. But if you have one content
tool and one playback platform, that's not going to hurt you and you could
probably convert to this format later.

This approach is for those needing to handle multiple source or target systems
or only wanting to target one (i.e. the web).

### Question Authoring Alternatives

Question authoring software exists that can help you author and publish content,
often using WYSIWYG tools that make your life easy if you are unfamiliar with
HTML and CSS. These systems often provide helpful item banking approaches,
import and export functions.

Various markup formats exist to make question authoring easier
(e.g. [Text2QTI](https://github.com/gpoore/text2qti)) which are well worth
checking out if you have a target of a version of QTI already and want an
easier way to mark up your content.
