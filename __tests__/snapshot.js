import { createRenderer } from 'vue-server-renderer';
import Vue from 'vue';

const renderer = createRenderer();

async function render(vm) {
    return await new Promise((resolve, reject) => {
        renderer.renderToString(vm, (error, html) => {
            if (error) {
                reject(error);
            }
            resolve(html);
        });
    });
}

it('matches a snapshot', async () => {

    const vm = new Vue({
        render(h) {
            return h('div', 'Hello world!');
        },
    });

    expect(await render(vm)).toMatchSnapshot();
});
