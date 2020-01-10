declare var process: {
    env: {
        NODE_ENV: 'production' | 'test' | 'development';
    };
};
interface Window {
    __INITIAL_STATE__: any;
    config: any;
}
// declare let window: Window;