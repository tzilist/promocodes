export default function viewSet(viewEngine) {
  return {
    engines: {
      jsx: viewEngine,
    },
    relativeTo: __dirname,
    path: '../../public/js',
  };
}
