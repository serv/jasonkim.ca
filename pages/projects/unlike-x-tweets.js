import deletelikes from '../../components/Projects/images/deletelikes.png';

export default function UnlikeXTweetsPage() {
  return (
    <div className="container mx-auto pb-12">
      <div className="text-gray-900 pt-8 pb-6">
        <div className="name whitespace-no-wrap text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider">
          <a className="hover:underline" href="/">
            Jason Kim
          </a>
        </div>
        <div className="blurb text-sm">Software engineer working for Microsoft in Redmond, WA</div>
      </div>

      <div className="text-gray-900 pb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wider">
        Unlike X Tweets
      </div>

      <div>
        <a
          href="https://chromewebstore.google.com/detail/unlike-x-tweets-beta/ifeompogjgjbfpinkmloheckpildbafk"
          target="_blank"
        >
          Chrome Extension Link
        </a>
      </div>

      <div>
        <a
          href="https://chromewebstore.google.com/detail/unlike-x-tweets-beta/ifeompogjgjbfpinkmloheckpildbafk"
          target="_blank"
        >
          <img className="" src={deletelikes} />
        </a>
      </div>

      <div className="text-gray-900 pb-4">
        <div className="text-sm">Mass delete Likes in your Twitter profile</div>

        <div className="text-sm">
          {/* TODO: Need to add installnation link */}
          <a href="" target="_blank" />
        </div>

        <h3 className="text-xl">FAQ</h3>

        <p className="font-bold">Why did my unliking operation not finish?</p>
        <p className="text-sm">
          Twitter has rate limit of 900 per 15 minutes. In order to prevent violating this limit,
          the Chrome Extension terminates after 12 minutes.
        </p>

        <p className="font-bold">Where can I get support?</p>
        <p className="text-sm">
          Contact me on{' '}
          <a className="underline" href="https://twitter.com/jasoki" target="_blank">
            Twitter
          </a>
          .
        </p>
      </div>
    </div>
  );
}
