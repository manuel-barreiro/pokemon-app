'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { generatePaginationArrays } from '@/lib/functions'
import { Button, Stack } from '@chakra-ui/react'

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
  perPage: number
  pagesNum: number
}

function PaginationComponent({
  hasNextPage,
  hasPrevPage,
  perPage,
  pagesNum
}: PaginationControlsProps):  JSX.Element {

  const router = useRouter()
  const searchParams = useSearchParams()
  const page = searchParams.get('page') ?? '1'


  const pagesArrays = generatePaginationArrays(pagesNum, 3)

  function handlePrevPage(page: number): void {
    if (page > 1){
      router.push(`/?page=${page - 1}`, {scroll: false})
    } else if (page < 1) {
      router.push(`/?page=1`, {scroll: false})
    }
  }

  function handleNextPage(page: number): void {
    if (page < pagesNum && page > 0){
      router.push(`/?page=${page + 1}`, {scroll: false})
    } 
  }

  return (
    <Stack spacing={4} direction='row' align='center'>
      <Button onClick={() => handlePrevPage(Number(page))}  colorScheme='teal' size='xs'>
        Previous
      </Button>
      <Button onClick={() => handleNextPage(Number(page))}  colorScheme='teal' size='xs'>
        Next
      </Button>

    </Stack>
  )
}

export default PaginationComponent