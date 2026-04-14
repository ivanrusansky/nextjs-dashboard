import { Metadata } from 'next';
import { Suspense } from 'react';
import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function CustomersPage(props: {
  searchParams?: Promise<{ query?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">
      <Suspense fallback={<p className="mt-6 text-gray-500">Loading customers...</p>}>
        <CustomersTable customers={customers} />
      </Suspense>
    </div>
  );
}
