
import { InlineIcon } from '@iconify/react';
import React from 'react';

const SocialLink = () => {
    return (
        <>
        <a href="https://github.com/OmarFaruq947">
        <InlineIcon
          icon="bi:facebook"
          style={{ color: "#0863F7", fontSize: "25px" }}
        />
        </a>
        <a href="https://www.linkedin.com/posts/md-omar-faruq-7458b819a_javascript-functions-programming-activity-7143846624220315649-4wfq?utm_source=share&utm_medium=member_desktop" target='_blank'>
        <InlineIcon
          icon="bi:linkedin"
          style={{ color: "#007AB5", fontSize: "25px" }}
        />
        </a>
        <a href="https://www.linkedin.com/pulse/cline-code-%25E0%25A6%258F%25E0%25A6%25B0-%25E0%25A6%2596%25E0%25A6%259C-md-omar-faruq-e41uc/?trackingId=5TfrFvu8QyCINo9aVfVMmA%3D%3D" target='_blank'>
        <InlineIcon
          icon="bi:twitter"
          style={{ color: "#1C96E9", fontSize: "25px" }}
        />
        </a>
      </>
    );
};

export default SocialLink;