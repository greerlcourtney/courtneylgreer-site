import services from './consultingServices';

test('exports five service tiers', () => {
  expect(services).toHaveLength(5);
});

test('each service has required fields', () => {
  services.forEach((service) => {
    expect(service).toHaveProperty('id');
    expect(service).toHaveProperty('name');
    expect(service).toHaveProperty('price');
    expect(service).toHaveProperty('headline');
    expect(service).toHaveProperty('description');
    expect(typeof service.price).toBe('string');
  });
});

test('tiers are in correct order', () => {
  const ids = services.map((s) => s.id);
  expect(ids).toEqual([
    'team-training',
    'discovery',
    'setup',
    'full-integration',
    'ongoing-support',
  ]);
});

test('service IDs are unique', () => {
  const ids = services.map((s) => s.id);
  expect(new Set(ids).size).toBe(ids.length);
});
