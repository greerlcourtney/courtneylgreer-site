import services, { HOURLY_RATE } from './consultingServices';

test('exports an hourly rate', () => {
  expect(typeof HOURLY_RATE).toBe('number');
  expect(HOURLY_RATE).toBeGreaterThan(0);
});

test('exports three service tiers', () => {
  expect(services).toHaveLength(3);
});

test('each service has required fields', () => {
  services.forEach((service) => {
    expect(service).toHaveProperty('id');
    expect(service).toHaveProperty('name');
    expect(service).toHaveProperty('hours');
    expect(service).toHaveProperty('description');
    expect(service).toHaveProperty('details');
    expect(typeof service.hours).toBe('number');
    expect(service.hours).toBeGreaterThan(0);
  });
});

test('no Custom tier exists', () => {
  expect(services.find((s) => s.id === 'custom')).toBeUndefined();
});

test('service IDs are unique', () => {
  const ids = services.map((s) => s.id);
  expect(new Set(ids).size).toBe(ids.length);
});
