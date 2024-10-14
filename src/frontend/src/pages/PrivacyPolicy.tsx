import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    
    <div className="container mx-auto px-4 py-8">
          <Link to="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500">Last updated: October 14, 2024</p>
      <p className="mt-4">
        This Privacy Policy describes Our policies and procedures on the
        collection, use and disclosure of Your information when You use the
        Service and tells You about Your privacy rights and how the law protects
        You.
      </p>
      <p className="mt-2">
        We use Your Personal data to provide and improve the Service. By using
        the Service, You agree to the collection and use of information in
        accordance with this Privacy Policy. This Privacy Policy has been
        created with the help of the{" "}
        <a
          href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/"
          target="_blank"
          className="text-blue-600 underline"
          rel="noopener noreferrer"
        >
          Free Privacy Policy Generator
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-6">Interpretation and Definitions</h2>

      <h3 className="text-xl font-medium mt-4">Interpretation</h3>
      <p className="mt-2">
        The words of which the initial letter is capitalized have meanings
        defined under the following conditions. The following definitions shall
        have the same meaning regardless of whether they appear in singular or
        in plural.
      </p>

      <h3 className="text-xl font-medium mt-4">Definitions</h3>
      <p className="mt-2">For the purposes of this Privacy Policy:</p>
      <ul className="list-disc pl-6 mt-2">
        <li>
          <p>
            <strong>Account</strong> means a unique account created for You to
            access our Service or parts of our Service.
          </p>
        </li>
        <li>
          <p>
            <strong>Affiliate</strong> means an entity that controls, is
            controlled by or is under common control with a party, where
            "control" means ownership of 50% or more of the shares, equity
            interest or other securities entitled to vote for election of
            directors or other managing authority.
          </p>
        </li>
        <li>
          <p>
            <strong>Application</strong> refers to ConnectED, the software
            program provided by the Company.
          </p>
        </li>
        <li>
          <p>
            <strong>Company</strong> (referred to as either "the Company", "We",
            "Us" or "Our" in this Agreement) refers to ConnectED.
          </p>
        </li>
        <li>
          <p>
            <strong>Country</strong> refers to: Philippines
          </p>
        </li>
        <li>
          <p>
            <strong>Device</strong> means any device that can access the Service
            such as a computer, a cellphone or a digital tablet.
          </p>
        </li>
        <li>
          <p>
            <strong>Personal Data</strong> is any information that relates to an
            identified or identifiable individual.
          </p>
        </li>
        <li>
          <p>
            <strong>Service</strong> refers to the Application.
          </p>
        </li>
        <li>
          <p>
            <strong>Service Provider</strong> means any natural or legal person
            who processes the data on behalf of the Company.
          </p>
        </li>
        <li>
          <p>
            <strong>Third-party Social Media Service</strong> refers to any
            website or any social network website through which a User can log
            in or create an account to use the Service.
          </p>
        </li>
        <li>
          <p>
            <strong>Usage Data</strong> refers to data collected automatically,
            either generated by the use of the Service or from the Service
            infrastructure itself (for example, the duration of a page visit).
          </p>
        </li>
        <li>
          <p>
            <strong>You</strong> means the individual accessing or using the
            Service, or the company, or other legal entity on behalf of which
            such individual is accessing or using the Service, as applicable.
          </p>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Collecting and Using Your Personal Data</h2>

      <h3 className="text-xl font-medium mt-4">Types of Data Collected</h3>

      <h4 className="text-lg font-semibold mt-4">Personal Data</h4>
      <p className="mt-2">
        While using Our Service, We may ask You to provide Us with certain
        personally identifiable information that can be used to contact or
        identify You. Personally identifiable information may include, but is
        not limited to:
      </p>
      <ul className="list-disc pl-6 mt-2">
        <li>Email address</li>
        <li>First name and last name</li>
        <li>Phone number</li>
        <li>Address, State, Province, ZIP/Postal code, City</li>
        <li>Usage Data</li>
      </ul>

      <h4 className="text-lg font-semibold mt-4">Usage Data</h4>
      <p className="mt-2">
        Usage Data is collected automatically when using the Service. Usage Data
        may include information such as Your Device's Internet Protocol address
        (e.g. IP address), browser type, browser version, the pages of our
        Service that You visit, the time and date of Your visit, the time spent
        on those pages, unique device identifiers and other diagnostic data.
      </p>

      <h4 className="text-lg font-semibold mt-4">
        Information from Third-Party Social Media Services
      </h4>
      <p className="mt-2">
        The Company allows You to create an account and log in to use the
        Service through the following Third-party Social Media Services:
      </p>
      <ul className="list-disc pl-6 mt-2">
        <li>Google</li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>LinkedIn</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;