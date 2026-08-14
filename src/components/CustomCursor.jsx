import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    // Set initial position
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Instant movement for the small dot
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: "power2.out"
      });
      
      // Delayed smooth movement for the follower
      gsap.to(follower, {
        x: mouseX,
        y: mouseY,
        duration: 0.6,
        ease: "power3.out"
      });
    };

    // Hover effects on interactive elements
    const onMouseEnter = () => {
      gsap.to(follower, {
        scale: 2.2,
        backgroundColor: "rgba(253, 67, 0, 0.15)",
        borderColor: "rgba(253, 67, 0, 0.8)",
        duration: 0.3
      });
      gsap.to(cursor, {
        scale: 0.4,
        duration: 0.3
      });
    };

    const onMouseLeave = () => {
      gsap.to(follower, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "rgba(95, 77, 206, 0.5)",
        duration: 0.3
      });
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    
    // Attach hover listeners to all interactive elements
    const attachListeners = () => {
      const elements = document.querySelectorAll('a, button, input, select, textarea, [data-cursor="hover"]');
      elements.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
      });
    };
    
    // Initial attach
    attachListeners();
    
    // Setup a mutation observer in case elements are added later
    const observer = new MutationObserver((mutations) => {
      let shouldReattach = false;
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          shouldReattach = true;
          break;
        }
      }
      if (shouldReattach) {
        attachListeners();
      }
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
      const elements = document.querySelectorAll('a, button, input, select, textarea, [data-cursor="hover"]');
      elements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-3 h-3 bg-[#FD4300] rounded-full pointer-events-none z-[999999] hidden lg:block"
      ></div>
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-9 h-9 border-2 border-[#5F4DCE]/50 rounded-full pointer-events-none z-[999998] hidden lg:block"
      ></div>
    </>
  );
}
