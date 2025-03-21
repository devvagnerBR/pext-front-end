'use server'

import { revalidateTag } from 'next/cache';

export async function revalidateTagHook( tag: string ) {
  return revalidateTag( tag );
}
