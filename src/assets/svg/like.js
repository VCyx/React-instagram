export const like = ({ filled }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.39 4.00001C21.24 3.85001 21.08 3.70001 20.91 3.56001C20.7586 3.42896 20.5982 3.30866 20.43 3.20001H20.38L19.89 2.91001H19.83C19.6633 2.82335 19.4933 2.74335 19.32 2.67001L18.77 2.48001C18.5837 2.41945 18.3932 2.37266 18.2 2.34001C18 2.34001 17.81 2.27001 17.61 2.25001C17.4301 2.24007 17.2499 2.24007 17.07 2.25001C16.206 2.20925 15.3426 2.34322 14.5316 2.64391C13.7206 2.94461 12.9786 3.40584 12.35 4.00001L12 4.32001L11.65 4.00001C10.4251 2.97851 8.8624 2.45202 7.26905 2.52402C5.67571 2.59601 4.16689 3.26128 3.03907 4.38909C1.91126 5.51691 1.24599 7.02573 1.174 8.61907C1.102 10.2124 1.62849 11.7751 2.64999 13L11.21 21.56C11.3 21.6479 11.405 21.719 11.52 21.77C11.688 21.8585 11.8751 21.9047 12.065 21.9047C12.2549 21.9047 12.4419 21.8585 12.61 21.77C12.708 21.723 12.7989 21.6624 12.88 21.59L21.39 13L21.54 12.84C22.6593 11.6313 23.2686 10.037 23.2406 8.38988C23.2127 6.74275 22.5497 5.17005 21.39 4.00001Z"
        fill={filled ? "#3772FF" : "none"}
      />
      <path
        d="M17.45 16.09C17.386 16.1447 17.334 16.212 17.2973 16.2877C17.2606 16.3634 17.2399 16.4459 17.2366 16.5299C17.2333 16.614 17.2474 16.6979 17.2781 16.7763C17.3087 16.8546 17.3553 16.9258 17.4148 16.9853C17.4743 17.0448 17.5454 17.0913 17.6238 17.122C17.7022 17.1527 17.786 17.1668 17.8701 17.1635C17.9542 17.1602 18.0367 17.1395 18.1124 17.1028C18.1881 17.066 18.2554 17.014 18.31 16.95L21.83 13.44C23.1548 12.1365 23.9074 10.3601 23.9224 8.5016C23.9374 6.64312 23.2136 4.85479 21.91 3.53003C20.6065 2.20528 18.8301 1.45261 16.9716 1.43761C15.1131 1.4226 13.3248 2.1465 12 3.45003C11.1581 2.63687 10.1271 2.04581 9.00001 1.73003C8.84223 1.68698 8.67382 1.70801 8.53147 1.78854C8.38912 1.86908 8.28437 2.00261 8.24001 2.16003C8.19695 2.31782 8.21799 2.48623 8.29852 2.62858C8.37906 2.77092 8.51259 2.87568 8.67001 2.92003C9.63456 3.1825 10.5137 3.69272 11.22 4.40003L11.57 4.75003C11.6259 4.80749 11.6928 4.85316 11.7666 4.88434C11.8405 4.91552 11.9198 4.93159 12 4.93159C12.0802 4.93159 12.1595 4.91552 12.2334 4.88434C12.3072 4.85316 12.3741 4.80749 12.43 4.75003L12.78 4.40003C13.8634 3.31 15.3355 2.69498 16.8723 2.69029C18.4092 2.68561 19.885 3.29163 20.975 4.37503C22.0651 5.45844 22.6801 6.9305 22.6848 8.46736C22.6894 10.0042 22.0834 11.48 21 12.57L17.45 16.09Z"
        fill="#3772FF"
      />
      <path
        d="M6.00001 2.82001C6.15809 2.78625 6.29673 2.69209 6.38639 2.55759C6.47605 2.4231 6.50965 2.25891 6.48001 2.10001C6.46448 2.0211 6.4335 1.94604 6.38885 1.87914C6.34421 1.81225 6.28677 1.75485 6.21986 1.71024C6.15294 1.66563 6.07786 1.63469 5.99894 1.6192C5.92002 1.60372 5.83882 1.60399 5.76001 1.62001C4.51532 1.86592 3.36087 2.44549 2.4201 3.29676C1.47932 4.14803 0.787593 5.23898 0.418878 6.45297C0.0501622 7.66695 0.0183228 8.95833 0.326764 10.189C0.635205 11.4197 1.27233 12.5434 2.17001 13.44L10.73 22C10.8964 22.1675 11.0942 22.3004 11.3122 22.3912C11.5302 22.4819 11.7639 22.5286 12 22.5286C12.2361 22.5286 12.4698 22.4819 12.6878 22.3912C12.9058 22.3004 13.1036 22.1675 13.27 22L16.22 19.06C16.3319 18.9428 16.3943 18.787 16.3943 18.625C16.3943 18.463 16.3319 18.3072 16.22 18.19C16.104 18.0758 15.9478 18.0118 15.785 18.0118C15.6222 18.0118 15.466 18.0758 15.35 18.19L12.4 21.13C12.2922 21.2327 12.1489 21.29 12 21.29C11.8511 21.29 11.7079 21.2327 11.6 21.13L3.00001 12.57C2.26123 11.827 1.73832 10.8971 1.4872 9.87989C1.23608 8.86264 1.2662 7.79625 1.57434 6.7948C1.88248 5.79334 2.45705 4.89449 3.23659 4.19436C4.01613 3.49424 4.97133 3.01918 6.00001 2.82001Z"
        fill="#3772FF"
      />
    </svg>
  );
};
