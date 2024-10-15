// src/components/TermsAndConditions.tsx
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions: FC = () => {
  return (
    <><Link to="/">
          <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
          </Button>
      </Link><div className="p-6 bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
              <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>

              <p>Welcome to ConnectED!</p>

              <p>
                  These terms and conditions outline the rules and regulations for the use
                  of ConnectED's Website, located at <strong>connectEd.com</strong>.
              </p>

              <p>
                  By accessing this website we assume you accept these terms and
                  conditions. Do not continue to use <strong>connectEd.com</strong> if you
                  do not agree to take all of the terms and conditions stated on this
                  page.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-2">Cookies</h2>
              <p>
                  We employ the use of cookies. By accessing connectEd.com, you agreed to
                  use cookies in agreement with ConnectED's Privacy Policy.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-2">License</h2>
              <p>
                  Unless otherwise stated, ConnectED and/or its licensors own the
                  intellectual property rights for all material on connectEd.com. All
                  intellectual property rights are reserved. You may access this from
                  connectEd.com for your own personal use subjected to restrictions set in
                  these terms and conditions.
              </p>

              <p className="mt-4">
                  You must not:
                  <ul className="list-disc list-inside ml-4">
                      <li>Republish material from connectEd.com</li>
                      <li>Sell, rent or sub-license material from connectEd.com</li>
                      <li>Reproduce, duplicate or copy material from connectEd.com</li>
                      <li>Redistribute content from connectEd.com</li>
                  </ul>
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-2">Comments</h2>
              <p>
                  Parts of this website offer an opportunity for users to post and
                  exchange opinions and information. ConnectED does not filter, edit,
                  publish, or review Comments prior to their presence on the website.
                  Comments reflect the views and opinions of the person who post them.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-2">Hyperlinking to our Content</h2>
              <p>
                  The following organizations may link to our Website without prior
                  written approval:
              </p>
              <ul className="list-disc list-inside ml-4">
                  <li>Government agencies;</li>
                  <li>Search engines;</li>
                  <li>News organizations;</li>
                  <li>Online directory distributors;</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6 mb-2">Content Liability</h2>
              <p>
                  We shall not be hold responsible for any content that appears on your
                  Website. You agree to protect and defend us against all claims that is
                  rising on your Website.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-2">Disclaimer</h2>
              <p>
                  To the maximum extent permitted by applicable law, we exclude all
                  representations, warranties and conditions relating to our website and
                  the use of this website.
              </p>
          </div></>
  );
};

export default TermsAndConditions;
