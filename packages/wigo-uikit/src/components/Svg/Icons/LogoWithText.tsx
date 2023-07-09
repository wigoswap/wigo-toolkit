import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<React.PropsWithChildren<LogoProps>> = ({ isDark, ...props }) => {
  return (
    <Svg viewBox="0 0 376 69" {...props}>
      <path
        d="M61.9015 34.2798H68.8001V0H34.2876V6.88001H57.0246C43.8705 20.8463 23.688 26.2646 5.28216 20.7719L1.97762 19.7858L3.56307e-06 26.377L3.30454 27.3632C24.1373 33.5801 46.9532 27.5018 61.9015 11.7508V34.2798Z"
        fill="#374EF5"
      />
      <path
        d="M6.89862 34.5203H0V68.8001H34.5125V61.9201H11.7755C24.9296 47.9538 45.1121 42.5355 63.5179 48.0282L66.8225 49.0143L68.8001 42.4231L65.4956 41.4369C44.6628 35.22 21.8469 41.2983 6.89862 57.0494V34.5203Z"
        fill="#374EF5"
      />
      <path
        d="M96.7274 55.48L86.0977 13.7611H94.4986L102.785 48.7364H104.385L110.9 15.3613H119.701L127.188 48.7364H128.731L136.103 13.7611H144.047L134.56 55.48H121.644L115.244 27.6484L109.415 55.48H96.7274Z"
        fill="white"
      />
      <path
        d="M150.494 20.7333C148.932 20.7333 147.77 20.3332 147.008 19.5332C146.284 18.695 145.922 17.6472 145.922 16.39C145.922 15.1327 146.284 14.104 147.008 13.3039C147.77 12.5038 148.932 12.1038 150.494 12.1038C152.018 12.1038 153.142 12.5038 153.865 13.3039C154.627 14.104 155.008 15.1327 155.008 16.39C155.008 17.6472 154.627 18.695 153.865 19.5332C153.142 20.3332 152.018 20.7333 150.494 20.7333ZM147.579 55.48V30.3915H143.236V24.448H155.523V55.48H147.579Z"
        fill="white"
      />
      <path
        d="M173.65 67.71C170.488 67.71 167.535 67.5004 164.792 67.0813V60.452C166.126 60.6425 167.573 60.7949 169.135 60.9092C170.736 61.0235 172.222 61.0806 173.593 61.0806C177.403 61.0806 180.146 60.3758 181.823 58.9661C183.537 57.5945 184.394 55.3657 184.394 52.2797V49.5365C183.328 51.5558 181.861 53.0988 179.994 54.1656C178.165 55.1943 176.051 55.7086 173.65 55.7086C170.793 55.7086 168.297 55.0228 166.164 53.6512C164.068 52.2416 162.43 50.3747 161.249 48.0506C160.068 45.6885 159.477 43.0405 159.477 40.1069V38.9067C159.477 35.9731 160.087 33.3442 161.306 31.0202C162.563 28.6961 164.278 26.8673 166.449 25.5338C168.659 24.1622 171.212 23.4765 174.107 23.4765C176.813 23.4765 179.137 24.1051 181.08 25.3624C183.061 26.6197 184.566 28.4294 185.594 30.7916V24.448H191.881V51.8225C191.881 57.4993 190.414 61.5569 187.48 63.9953C184.547 66.4717 179.937 67.71 173.65 67.71ZM175.936 48.9079C177.46 48.9079 178.851 48.565 180.108 47.8792C181.365 47.1934 182.375 46.2028 183.137 44.9074C183.899 43.612 184.28 42.05 184.28 40.2212V38.221C184.28 36.4684 183.88 34.9825 183.08 33.7633C182.318 32.5441 181.289 31.6297 179.994 31.0202C178.737 30.3725 177.384 30.0486 175.936 30.0486C173.422 30.0486 171.364 30.9249 169.764 32.6775C168.202 34.392 167.421 36.6779 167.421 39.5354C167.421 42.431 168.202 44.7169 169.764 46.3933C171.364 48.0697 173.422 48.9079 175.936 48.9079Z"
        fill="white"
      />
      <path
        d="M212.318 56.5659C208.661 56.5659 205.575 55.8229 203.06 54.337C200.546 52.8131 198.622 50.8319 197.288 48.3935C195.993 45.9551 195.345 43.3644 195.345 40.6212V39.4211C195.345 36.5636 196.012 33.9157 197.345 31.4773C198.717 29.039 200.66 27.0769 203.175 25.591C205.727 24.1051 208.775 23.3622 212.318 23.3622C215.824 23.3622 218.833 24.1051 221.348 25.591C223.901 27.0769 225.844 29.039 227.177 31.4773C228.549 33.9157 229.235 36.5636 229.235 39.4211V40.6212C229.235 43.3644 228.568 45.9551 227.234 48.3935C225.939 50.8319 224.034 52.8131 221.519 54.337C219.005 55.8229 215.938 56.5659 212.318 56.5659ZM212.318 49.7651C215.214 49.7651 217.424 48.8507 218.948 47.0219C220.51 45.1551 221.291 42.8119 221.291 39.9926C221.291 37.1732 220.491 34.8301 218.891 32.9632C217.29 31.0964 215.1 30.1629 212.318 30.1629C209.499 30.1629 207.289 31.0964 205.689 32.9632C204.089 34.8301 203.289 37.1732 203.289 39.9926C203.289 42.8119 204.051 45.1551 205.575 47.0219C207.137 48.8507 209.385 49.7651 212.318 49.7651Z"
        fill="white"
      />
      <path
        d="M248.134 56.5087C244.667 56.5087 241.715 55.9372 239.276 54.7942C236.838 53.6512 234.971 52.0701 233.676 50.0508C232.38 48.0316 231.733 45.7456 231.733 43.1929H237.333C237.333 44.4502 237.657 45.7075 238.305 46.9648C238.991 48.2221 240.115 49.2698 241.677 50.108C243.277 50.9462 245.429 51.3653 248.134 51.3653C250.649 51.3653 252.706 51.0033 254.307 50.2794C255.907 49.5174 257.088 48.5459 257.85 47.3648C258.612 46.1456 258.993 44.8312 258.993 43.4215C258.993 41.7071 258.25 40.2974 256.764 39.1925C255.278 38.0495 253.106 37.3447 250.249 37.078L245.62 36.6779C241.924 36.3731 238.972 35.2301 236.762 33.249C234.552 31.2678 233.447 28.658 233.447 25.4195C233.447 22.8669 234.057 20.638 235.276 18.7331C236.533 16.8281 238.267 15.3422 240.476 14.2754C242.686 13.1705 245.258 12.6181 248.192 12.6181C251.087 12.6181 253.64 13.1515 255.85 14.2183C258.059 15.2851 259.774 16.79 260.993 18.7331C262.25 20.638 262.879 22.924 262.879 25.591H257.278C257.278 24.2575 256.954 23.0002 256.307 21.8191C255.697 20.638 254.726 19.6665 253.392 18.9045C252.059 18.1425 250.325 17.7615 248.192 17.7615C246.134 17.7615 244.42 18.1235 243.048 18.8474C241.715 19.5713 240.705 20.5237 240.019 21.7048C239.372 22.8478 239.048 24.086 239.048 25.4195C239.048 26.9435 239.638 28.296 240.819 29.4771C242 30.6582 243.753 31.344 246.077 31.5345L250.706 31.9345C254.973 32.3155 258.345 33.4966 260.822 35.4778C263.336 37.4209 264.593 40.0688 264.593 43.4215C264.593 45.9742 263.908 48.2411 262.536 50.2223C261.164 52.2035 259.24 53.7465 256.764 54.8514C254.288 55.9563 251.411 56.5087 248.134 56.5087Z"
        fill="white"
      />
      <path
        d="M274.906 55.48L266.277 24.9623H271.534L278.735 51.1367H279.878L285.136 25.991H292.565L298.68 51.1367H299.823L306.11 24.9623H311.082L303.595 55.48H295.08L288.851 30.1058L283.479 55.48H274.906Z"
        fill="white"
      />
      <path
        d="M323.583 56.2801C320.116 56.2801 317.392 55.4229 315.411 53.7084C313.468 51.9558 312.496 49.4984 312.496 46.3361C312.496 43.0977 313.582 40.6593 315.754 39.021C317.925 37.3447 320.992 36.5065 324.955 36.5065H332.67V35.7635C332.67 31.5345 330.536 29.42 326.269 29.42C324.516 29.42 322.688 29.4581 320.783 29.5343C318.878 29.6105 317.297 29.6867 316.039 29.7629V24.9623C317.259 24.848 318.611 24.7718 320.097 24.7337C321.621 24.6575 323.069 24.6194 324.44 24.6194C329.126 24.6194 332.536 25.4767 334.67 27.1912C336.842 28.9056 337.927 31.8964 337.927 36.1636V55.48H333.584V49.4222C332.213 53.9941 328.879 56.2801 323.583 56.2801ZM324.726 51.9368C326.021 51.9368 327.26 51.7082 328.441 51.251C329.622 50.7557 330.593 49.9556 331.355 48.8507C332.155 47.7077 332.594 46.1456 332.67 44.1645V40.6212H324.726C322.516 40.6212 320.821 41.1546 319.64 42.2214C318.459 43.2882 317.868 44.6598 317.868 46.3361C317.868 48.0125 318.459 49.3651 319.64 50.3937C320.821 51.4224 322.516 51.9368 324.726 51.9368Z"
        fill="white"
      />
      <path
        d="M344.854 66.9099V24.9623H349.197V32.4489C350.226 29.5152 351.826 27.3626 353.998 25.991C356.169 24.6194 358.608 23.9337 361.313 23.9337C364.284 23.9337 366.856 24.6575 369.028 26.1053C371.238 27.5531 372.952 29.4771 374.171 31.8774C375.39 34.2396 376 36.8494 376 39.7068V40.7355C376 43.593 375.371 46.2218 374.114 48.6221C372.857 50.9843 371.104 52.8893 368.856 54.337C366.647 55.7848 364.094 56.5087 361.198 56.5087C359.103 56.5087 357.084 56.0706 355.141 55.1943C353.197 54.318 351.597 52.8893 350.34 50.9081V66.9099H344.854ZM360.341 51.7082C362.398 51.7082 364.189 51.2319 365.713 50.2794C367.237 49.2889 368.418 47.9363 369.256 46.2218C370.095 44.4693 370.514 42.469 370.514 40.2212C370.514 37.9352 370.095 35.935 369.256 34.2205C368.418 32.506 367.237 31.1726 365.713 30.2201C364.189 29.2295 362.398 28.7342 360.341 28.7342C358.512 28.7342 356.817 29.1533 355.255 29.9915C353.693 30.7916 352.435 31.9726 351.483 33.5347C350.569 35.0587 350.111 36.9065 350.111 39.0782V41.7071C350.111 43.8025 350.588 45.5932 351.54 47.0791C352.493 48.565 353.75 49.708 355.312 50.508C356.874 51.3081 358.55 51.7082 360.341 51.7082Z"
        fill="white"
      />
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
