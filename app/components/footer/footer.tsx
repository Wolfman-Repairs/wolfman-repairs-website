export default function Footer() {
    return (
        <footer className="p-4 bg-neutral-900 text-white w-full">
            <hr className="my-6 border-neutral-700" />
            <div className="flex items-center justify-between">
                <span className="text-sm text-center text-gray-400">© 2024 Wolfman Repairs™. All Rights Reserved.</span>
                <div className="flex space-x-2 justify-center text-gray-500">
                    <a href="https://www.youtube.com/@wolfmanrepairs" target="_blank"
                        className="hover:text-white w-4 h-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -7 48 48">
                            <path fill="currentColor" fill-rule="evenodd" d="m19.044 23.27-.002-13.582 12.97 6.814-12.968 6.768ZM47.52 7.334s-.47-3.33-1.908-4.798C43.786.61 41.74.601 40.803.49 34.086 0 24.011 0 24.011 0h-.022S13.914 0 7.197.49C6.258.6 4.214.61 2.387 2.535.948 4.003.48 7.334.48 7.334S0 11.247 0 15.158v3.668c0 3.912.48 7.823.48 7.823s.468 3.331 1.907 4.798c1.827 1.926 4.225 1.866 5.293 2.067C11.52 33.885 24 34 24 34s10.086-.015 16.803-.505c.938-.113 2.983-.122 4.809-2.048 1.438-1.467 1.908-4.798 1.908-4.798s.48-3.91.48-7.823v-3.668c0-3.911-.48-7.824-.48-7.824Z" />
                        </svg>
                        <span className="sr-only">Youtube Channel</span>
                    </a>
                    <a href="https://www.etsy.com/shop/WolfmanRepairs" target="_blank"
                        className="hover:text-white w-4 h-4">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 97.75 97.75">
                            <path fill="currentColor" d="M48.875 0C21.882 0 0 21.883 0 48.875S21.882 97.75 48.875 97.75 97.75 75.867 97.75 48.875 75.868 0 48.875 0zm29.854 68.146c-.556 4.598-1.133 9.192-1.649 13.795-.19 1.713-.125 1.703-1.881 1.683-13.405-.167-26.809-.384-40.214-.459-4.803-.028-9.607.289-14.412.44-.636.021-1.271.004-2.027.004V79.48c1.713-.338 3.529-.674 5.334-1.063.742-.16 1.478-.392 2.181-.674 1.061-.427 1.727-1.216 1.88-2.38.071-.547.179-1.096.184-1.644.092-10.002.218-20.003.232-30.004.009-6.213-.15-12.425-.252-18.636-.057-3.517-.988-4.611-4.417-5.266-1.457-.277-2.93-.497-4.372-.833-.348-.083-.843-.506-.871-.81-.104-1.133-.041-2.279-.041-3.516 19.228.32 38.347 1.13 57.646-.536L74.829 33.84c-1.169 0-2.239.093-3.277-.049-.367-.052-.828-.62-.955-1.04-.588-1.948-1.023-3.943-1.613-5.892a20.984 20.984 0 0 0-1.346-3.299c-1.207-2.395-3.019-3.681-5.888-3.632-6.896.121-13.794.037-20.69.041-1.754.002-1.806.06-1.808 1.778-.01 7.748-.016 15.497-.022 23.244-.002.423 0 .846 0 1.378 3.049 0 5.932.048 8.813-.018 1.867-.041 3.731-.225 5.595-.379 2.549-.211 3.455-.955 4.096-3.415.48-1.846.91-3.705 1.326-5.567.164-.734.498-1.072 1.303-1.015 1.014.072 2.037.018 3.199.018 0 .677.006 1.284 0 1.894-.062 7.271-.141 14.542-.164 21.813-.004.967-.228 1.352-1.266 1.357-3.055.022-3.053.063-3.773-2.92-.26-1.072-.521-2.146-.803-3.211-.647-2.455-2.479-3.359-4.783-3.435-4.335-.146-8.676-.188-13.015-.271-.118-.002-.237.063-.47.125-.021.481-.063.979-.064 1.476-.01 6.472-.016 12.942-.018 19.413-.003 4.021 1.512 5.972 5.546 6.086 6.204.178 12.423.049 18.629-.141 3.754-.113 6.325-2.312 7.935-5.58a119.772 119.772 0 0 0 3.621-8.146c.49-1.221 1.129-1.787 2.451-1.584.573.09 1.174.015 1.98.015a3668.9 3668.9 0 0 0-.639 5.262z" />
                        </svg>
                        <span className="sr-only">Etsy Store</span>
                    </a>
                    <a href="https://www.ebay.com/usr/wolfmanrepairs" target="_blank"
                        className="hover:text-white w-4 h-4">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M53.415 457.119c2.418 22.104 21.089 38.855 43.334 38.855H415.26c22.236 0 40.915-16.752 43.326-38.855l27.956-206.229H25.459l27.956 206.229zm221.669-7.272h-38.168l-1.436-73.357h41.048l-1.444 73.357zm109.388-167.592h45.987l-5.587 63.549h-43.989l3.589-63.549zm-5.329 94.235h43.037l-5.742 65.398a8.725 8.725 0 0 1-8.692 7.958h-32.754l4.151-73.356zm-70.001-94.235h44.551l-3.59 63.549h-42.202l1.241-63.549zM307.3 376.49h41.064l-4.143 73.357h-38.364l1.443-73.357zm-28.923-94.235-1.248 63.549h-42.257l-1.241-63.549h44.746zm-72.233 167.592H167.78l-4.15-73.357h41.07l1.444 73.357zm-3.285-167.592 1.24 63.549h-42.202l-3.597-63.549h44.559zm-65.851 167.592h-32.754a8.724 8.724 0 0 1-8.685-7.958l-5.75-65.398h43.037l4.152 73.356zm-9.48-167.592 3.597 63.549H87.128l-5.578-63.549h45.978zM485.847 165.189H432.94L325.222 50.839c.514-2.137.819-4.346.819-6.624 0-7.74-3.183-14.879-8.263-19.935a28.16 28.16 0 0 0-19.934-8.255 28.13 28.13 0 0 0-19.927 8.255 28.199 28.199 0 0 0-8.263 19.935c0 7.74 3.183 14.872 8.263 19.934a28.154 28.154 0 0 0 19.927 8.255c1.701 0 3.363-.179 4.993-.467l87.846 93.252H121.318l87.846-93.252c1.63.288 3.292.467 4.993.467a28.144 28.144 0 0 0 19.928-8.255 28.145 28.145 0 0 0 8.262-19.934 28.135 28.135 0 0 0-8.262-19.935 28.144 28.144 0 0 0-19.928-8.255 28.16 28.16 0 0 0-19.934 8.255 28.163 28.163 0 0 0-8.255 19.935c0 2.278.296 4.487.819 6.624L79.068 165.189H26.154C11.712 165.189 0 176.9 0 191.343v12.281c0 14.442 11.712 26.153 26.154 26.153h459.694c14.442 0 26.153-11.711 26.153-26.153v-12.281c-.001-14.443-11.712-26.154-26.154-26.154zM297.477 44.567l-.14-.352.148-.367.359-.148.367.148.008.016-.742.703zm-83.687-.718.366-.148.359.148.157.367-.149.352-.741-.702.008-.017z" />
                        </svg>
                        <span className="sr-only">eBay Store</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
